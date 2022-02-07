import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FlightForm = () => {
    
    const [origins, setOrigins] = useState([])
    const [destinations, setDestinations] = useState([])
    const [adults, setAdults] = useState()
    const [children, setChildren] = useState()
    const [outDate, setOutDate] = useState()
    const [returnDate, setReturnDate] = useState()
    const [destinationCode, setDestinationCode]= useState()
    const [originCode, setOriginCode]= useState()

    const [url, setUrl]=useState()

    async function getAirports(e){
        e.preventDefault()
        const body = {'destination': 'Los Angeles', 'origin': e.target[0].value }
        const results = await axios.post("http://localhost:8000/airports/", body)
        const potential_destinations = []
        const potential_origins = []
        for(let x in results.data.origin){
            potential_origins.push(results.data.origin[x])
        }
        setOrigins(potential_origins)

        for(let x in results.data.destination){
            potential_destinations.push(results.data.destination[x])
        }
        setDestinations(potential_destinations)
        setDestinationCode(potential_destinations[0].code)

        setAdults(e.target[3].value)
        setChildren(e.target[4].value)

        //format date correctly ready for URL
        let formattedOutDate = e.target[1].value.substring(2).replace(/-/g,'')
        let formattedReturnDate = e.target[2].value.substring(2).replace(/-/g,'')
        setOutDate(formattedOutDate)
        setReturnDate(formattedReturnDate)
        
    }

    function generateLink(e){
        // "https://www.skyscanner.net/transport/flights/lond/nyca/220209/220216/"
        // "?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2="
        // "&inboundaltsenabled=false&infants=0&outboundaltsenabled=false"
        // "&preferdirects=false&ref=home&rtn=1"
        e.preventDefault()
        if(e.target.name === "origin-list"){
            setOriginCode(e.target.value)
        }
        else if(e.target.name === "destination-list"){
            setDestinationCode(e.target.value)
        }

        if(originCode && destinationCode){
            const url = `https://www.skyscanner.net/transport/flights/${originCode}/${destinationCode}/${outDate}/${returnDate}?adults=${adults}&adultsv2=1&cabinclass=economy&children=${children}&childrenv2=&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1`
            setUrl(url)
        }
    }

    return(
        <>
        <form id="flight-form" onSubmit={getAirports}>
            <input name="from" type="text"/>From: 
            <input name="outboundDate" type="date"/>Outbound flight:
            <input name="returnDate" type="date"/>Return:
            <input name="adults" type="number" min="0" max="8"/>Adults:
            <input name="children" type="number" min="0" max="8"/>Children:
            <input type="submit"/>Submit
        </form>
        {origins.length > 0 ?   <form className="potential-airports">
                                            <select name="origin-list" onChange={generateLink}>
                                                {origins.map( x => <option value={x.code} key={x.code}>{x.name}</option>)}
                                            </select>
                                </form>
        : <></>}
        {destinations.length > 0 ? <form className="potential-airports">
                                            <select name="destination-list" onChange={generateLink}>
                                                {destinations.map( x => <option value={x.code} key={x.code}>{x.name}</option>)}
                                            </select>
                                        </form>
        : <></>}
        {/* {destinations.length == 0 ? <p>Currently no flights to this destination</p> : <> </>} */}
        {url? <a href={url}>Click Here For Flights!</a> : <> </>}
        </>
    )
}

export default FlightForm