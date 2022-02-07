from django.shortcuts import render
from .models import airport_array
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def index(request):
    # body = {'destination': 'Paris',
    #         'origin': 'Los Angeles'}


    body = airport_serializer(request.data)
    print(request.data)
    # print(body)

    possible_airports = { 'destination': [], 'origin': [] }

    for airport in airport_array:

        if body['destination'] in airport['city']:
            possible_airports['destination'].append(airport)

        elif body['origin'] in airport['city']:
            possible_airports['origin'].append(airport)

    return Response(possible_airports)

def airport_serializer(request):
    data = json.dumps(request)
    data = json.loads(data)
    return data