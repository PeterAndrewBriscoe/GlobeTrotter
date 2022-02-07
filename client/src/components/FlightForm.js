import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FlightForm = () => {

    const destination = "Paris"
    
    // "https://www.skyscanner.net/transport/flights/lond/nyca/220209/220216/"
    // "?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2="
    // "&inboundaltsenabled=false&infants=0&outboundaltsenabled=false"
    // "&preferdirects=false&ref=home&rtn=1"
    
    async function makeUrl(e){
        e.preventDefault()
        const url = "https://www.skyscanner.net/transport/flights/"

        const body = {'destination': 'Paris', 'origin': 'Los Angeles'}


        const results = await axios.post("http://localhost:8000/airports/", body)
        console.log(results)
    }

    return(
        <form id="flight-form" onSubmit={makeUrl}>
            <input name="from" type="text"/>From: 
            <input name="outboundDate" type="date"/>Outbound flight:
            <input name="returnDate" type="date"/>Return:
            <input name="adults" type="number" min="0" max="8"/>Adults:
            <input name="children" type="number" min="0" max="8"/>Children:
            <input type="submit"/>Submit
        </form>
    )
}

export default FlightForm