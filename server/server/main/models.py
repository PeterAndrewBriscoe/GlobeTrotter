from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Trip(models.Model):
    location = models.CharField(max_length=100)
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    startdate = models.PositiveBigIntegerField(default=None, null=True, blank=True)
    enddate = models.PositiveBigIntegerField(default=None, null=True, blank=True)
    # date
    # flight
    # hotels
    # attractions
    # activities

    # def __str__(self):
    #     return f'{self.id, self.location}'


