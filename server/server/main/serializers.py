# adoption/serializers.py

from rest_framework import serializers
from .models import FlightFormInput, Trip

class TripSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trip
        fields = ('id', 'location', 'user', 'startdate', 'enddate')

    # def __str__(self):
    #     return f'{self.id, self.location}'

class FlightFormInputSerializer(serializers.ModelSerializer):

    class Meta:
        model = FlightFormInput
        fields = ('id', 'origin', 'user', 'outbound_date', 'return_date', 'adults', 'children')