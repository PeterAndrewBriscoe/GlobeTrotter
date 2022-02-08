from typing import Type
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Trip
from .serializers import TripSerializer
import json

# Create your views here.
@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'POST':
        data = json.dumps(request.data)
        data = json.loads(data)
        data['user'] = request.user.id
        print(data)
        serializer = TripSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        posts = Trip.objects.filter(user=request.user.id)
        serializer = TripSerializer(posts, many=True)
        return Response(serializer.data)