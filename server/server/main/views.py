from os import stat
from typing import Type
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import FlightFormInput, Trip
from .serializers import TripSerializer, FlightFormInputSerializer
import json
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def index(request):
    if request.method == 'POST':
        if(request.user.id):
            data = json.dumps(request.data)
            data = json.loads(data)
            data['user'] = request.user.id
            print(request.user.id)
            print(data)
            print('id' in data)
            if ('id' in data):
                serializer = TripSerializer(data=data)
                if serializer.is_valid():
                    # try:
                    trip = Trip.objects.filter(pk=data['id'], user=data['user'])
                    print(trip)
                    if not trip:
                        return Response({ 'message': 'Entry not found, incorrect id or user' })
                    trip.update(
                        startdate=data['startdate'],
                        enddate =data['enddate']
                    )
                    
                    return Response(serializer.data, status=status.HTTP_200_OK)
                    # except:
                    #     print("I am being run")
                    #     return Response({ "message": "id not found" }, status=status.HTTP_404_NOT_FOUND)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                serializer = TripSerializer(data=data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        else:
            return Response({ "message": "User needs to be logged in to save trips" }, status=status.HTTP_401_UNAUTHORIZED)
    if request.method == 'GET':
        if (request.user.id):
            posts = Trip.objects.filter(user=request.user.id)
            serializer = TripSerializer(posts, many=True)
            return Response(serializer.data)
        else: 
            return Response({"message" : "User must be logged in to view saved trips"}, status=status.HTTP_401_UNAUTHORIZED)
    if request.method == 'DELETE':
        if (request.user.id):
            print(request.data)
            data = json.dumps(request.data)
            data = json.loads(data)
            print(data['id'])
            id = data['id']
            trip_to_delete = get_object_or_404(Trip, pk=id, user=request.user.id)
            print(trip_to_delete)
            trip_to_delete.delete()
            serialized = TripSerializer(trip_to_delete, many=False)
            return Response(serialized.data)
            # return Response({"something": "something"})
        else:
            return Response({"message" : "User must be logged in to delete trips"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET', 'POST'])
def form(request):
    if request.method == 'POST':
        if(request.user.id):
            data = json.dumps(request.data)
            data = json.loads(data)
            data['user'] = request.user.id
            if (FlightFormInput.objects.filter(user=data['user']).exists()):
                serializer = FlightFormInputSerializer(data=data)
                if serializer.is_valid():
                    input = FlightFormInput.objects.filter(user=data['user'])
                    if not input:
                        return Response({ 'message': 'No recorded inputs' })
                    input.update(
                        origin = data['origin'],
                        outbound_date = data['outbound_date'],
                        return_date = data['return_date'],
                        adults = data['adults'],
                        children = data['children'],
                    )
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                serializer = FlightFormInputSerializer(data=data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
        else:
            return Response({ "message": "User must be logged in" }, status=status.HTTP_401_UNAUTHORIZED)
    if request.method == 'GET':
        if (request.user.id):
            input = FlightFormInput.objects.filter(user=request.user.id)
            serializer = FlightFormInputSerializer(input, many=True)
            return Response(serializer.data)
        else: 
            return Response({"message" : "User must be logged in to get form data"}, status=status.HTTP_401_UNAUTHORIZED)