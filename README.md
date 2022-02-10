# GlobeTrotter
- Contributors: Angela Dyrmishi, James Quin, Peter Andrews-Briscoe, Rahib Rahman, Rajesh Sharma
### Description
GlobeTrotter is a Trip Adviser/Reccomendation web application designed to provide suggestions and information on various places based on prerequisite conditions - i.e. Categories such as Golf, Nightlife, Beach and users can also select based on average historical temperature for the location. The site can also provide a detailed view for each selected location wherein users can see hotels around the area that are available for booking and also get a link to flights available to airports in that location. Users are also able to Register and login in order to save Trips to various locations with details of their trips such as dates and flight information.

This website is deployed on [Netlify](/) and has a Django server hosted on [Heroku](https://globe--trotter.herokuapp.com/)

## Installation
- Clone the repositiory into desired directory
- Open a terminal inside the cloned repo and navigate into client folder
- use command `npm install`
- Navigate back to root directory and go into the server folder
- Go into a virtual pipenv shell with `pipenv shell` and run `pipenv install`

## Usage
- Inside the client folder run `npm start` to open the client in browser
- Inside the server folder, while inside a virtual `pipenv shell`,  navigate to the server folder that contains the `manage.py` file, and run command `python manage.py runserver` to run the server locally

## Technologies
- HTML/CSS/JavaScript
- React Frontend
- Python/ Django Server
- PostgreSQL Database
- Jest
- Pytest
