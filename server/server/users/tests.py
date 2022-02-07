from django.test import TestCase, Client
from django.urls import reverse
import json

class TestViewsCase(TestCase):
    client = Client()
    
    def test_register(self):
        response = self.client.post(reverse('register'), {'username': 'test', 'email': 'test@test.com', 'password':'test'})
        self.assertEqual(response.status_code, 201)
    
    def test_login(self):
        self.client.post(reverse('register'), {'username': 'test', 'email': 'test@test.com', 'password':'test'})
        response = self.client.post(reverse('login'), {'username': 'test', 'password': 'test' })
        print(response)
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        self.client.post(reverse('register'), {'username': 'test', 'email': 'test@test.com', 'password':'test'})
        response = self.client.post(reverse('login'), {'username': 'test', 'password': 'test' })
        hold = response.content.decode('UTF-8')
        token = json.loads(hold)['token']
        print(token)
        response = self.client.post(reverse('logout'), **{'Authorization': f'Token {token}'})
        self.assertEqual(response.status_code, 200)