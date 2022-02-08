from django.db import models
import csv
import os
# from adaptor.model import CsvModel
# from adaptor.fields import CharField

# Create your models here.
def Airports():

    # path = os.listdir('frontend/server/server/airports')

    with open('airport-codes.csv', 'r', newline='') as csvfile:
        field_names=['airport_name', 'city', 'code']
        reader = csv.DictReader(csvfile)
        airport_array = []
        for row in reader:
            airport = {
                'name': row['airport_name'], 
                'city': row['city'], 
                'code': row['code']}
            airport_array.append(airport)
    
    return airport_array
    
airport_array = Airports()

# class AirportCSV(CsvModel):
#     name = CharField()
#     city = CharField()
#     code = CharField()

#     class Meta:
#         delimeter = ","


