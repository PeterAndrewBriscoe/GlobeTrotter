import { useState, useEffect } from 'react'
import axios from 'axios'

function FlightForm(props) {

	const [destinations, setDestinations] = useState([])
	const [origins, setOrigins] = useState([])
	const [depAirport, setDepAirport] = useState('')
	const [desAirport, setDesAirport] = useState('')
	const [output, setOutput] = useState('')
	const [flightUrl, setFlightUrl] = useState('')

	useEffect(() => {
		if(depAirport && desAirport) {
			let parsedOutDate = props.dates[0].toISOString()
      	parsedOutDate = parsedOutDate.substring(2, 10).replace(/-/g, '')
      	let parsedRtnDate = props.dates[1].toISOString()
      	parsedRtnDate = parsedRtnDate.substring(2, 10).replace(/-/g, '')
			setFlightUrl(`https://www.skyscanner.net/transport/flights/${depAirport}/${desAirport}/${parsedOutDate}/${parsedRtnDate}?adults=${props.flightForm.flightForm.adults}&adultsv2=1&cabinclass=economy&children=${props.flightForm.flightForm.children}&childrenv2=&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1`)
		}
		else
			setFlightUrl('')
	}, [depAirport, desAirport])
	
	async function getAirports() {
		try {
			const res = await axios.post("https://globe--trotter.herokuapp.com/airports/", { origin: props.flightForm.flightForm.origin, destination: props.destination })
			setOrigins(res.data.origin)
			setDestinations(res.data.destination)

		} catch(e) {
			setOutput(e.message)
		}
	}

	const handleChangeDeparture = e => {
		setDepAirport(e.target.value)
	}

	const handleChangeDestination = e => {
		setDesAirport(e.target.value)
	}

	const handleFormSubmit = e => {
		e.preventDefault()
		getAirports()
	}

	const handleInput = e => {
		const { name, value } = e.target
		props.flightForm.setFlightForm({ ...props.flightForm.flightForm, [name]: value})
	}

	return (
		<div className="flight-form-div">
			<form id="flight-form" onSubmit={handleFormSubmit}>
                <input required name="origin" type="text" placeholder='flying from' value={props.flightForm.flightForm.origin} onChange={handleInput} />
                <input required name="adults" type="number" min="0" max="8" placeholder='number of adults' value={props.flightForm.flightForm.adults} onChange={handleInput} />
                <input name="children" type="number" min="0" max="8" placeholder='number of children' value={props.flightForm.flightForm.children} onChange={handleInput} />
                <input type="submit" disabled={!props.dates}/>
				<h4>{output}</h4>
      	    </form>
			{ origins.length > 0 && destinations.length > 0 &&
			<div className="flex-container">
				<select onChange={e => handleChangeDeparture(e)}>
					<option value="">Select Departure Airport</option>
					{origins.map(e => <option value={e.code} key={`dep${e.code}`}>{e.name}</option>)}
				</select>
				<select onChange={e => handleChangeDestination(e)}>
					<option value="">Select Destination Airport</option>
					{destinations.map(e => <option value={e.code} key={`des${e.code}`}>{e.name}</option>)}
				</select>
			</div>
			}
			{flightUrl && <a href={flightUrl} id="flight-link" target="_blank" rel="noopener noreferrer">Click Here For Flights!</a>}
		</div>
	)
}

export default FlightForm