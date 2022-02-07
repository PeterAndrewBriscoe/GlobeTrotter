from django.test import TestCase, Client
from django.urls import reverse


# Create your tests here.

class ViewsTestCase(TestCase):
    def test_register(self):
        client = Client()
        response = self.client.post('api/register', {'username': 'test', })
        assert response.status_code == 201

class TestBasicViews(ViewsTestCase):
    c = Client()

    def test_login(self):
        client = Client
        return