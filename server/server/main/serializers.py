# adoption/serializers.py

from rest_framework import serializers
from .models import Trip

class TripSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trip
        fields = ('id', 'location', 'user')

    # def __str__(self):
    #     return f'{self.id, self.location}'