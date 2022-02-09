from django.test import TestCase, Client
from django.urls import reverse
import json

class TestViewsCase(TestCase):
    client = Client()
    
    def test_trip_creation(self):
        response = self.client.post(reverse('api'), {'location': 'New York', 'user': 1, 'startdate':123456, 'enddate':234567})
        self.assertEqual(response.status_code, 201)
    
    def test_trip_creation(self):
        response = self.client.get(reverse('api'), {'user': 1})
        self.assertEqual(response.status_code, 200)