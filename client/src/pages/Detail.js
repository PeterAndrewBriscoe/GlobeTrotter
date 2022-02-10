import { useContext, useState, useEffect } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
//import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css'
import { useNavigate } from 'react-router-dom'
import Iframe from 'react-iframe'
import ReactWeather, { useOpenWeather } from 'react-open-weather'
import Context from '../utils/Context'
import ConfirmModal from '../components/ConfirmModal'
import { GlobeTrotter } from '../utils/axios_helper'

import Slideshow from '../components/Slideshow'
import FlightForm from '../components/FlightForm'
import Attractions from '../components/Attractions'

function Detail() {
	const day = 8.64e7
	const trotter = GlobeTrotter(localStorage.getItem('globeTrotterToken'))
	const { placeData, userData } = useContext(Context)
	const [flightForm, setFlightForm] = useState(initialiseForm())
	const [output, setOutput] = useState('')
	const [showModal, setShowModal] = useState('none')
	const [confirmedModal, setConfirmedModal] = useState(false)
	const [dates, changeDates] = useState(initialiseDates())
	
	const navigate = useNavigate()
	
	/*
	const { data, isLoading, errorMessage } = useOpenWeather({
		key: '05997b31df808c81ea6165ee022a8b1c',
		lat: placeData && placeData.coordinates.latitude,
		lon: placeData&& placeData.coordinates.longitude,
		lang: 'en',
		unit: 'metric', // values are (metric, standard, imperial)
	})*/

	function initialiseDates() {
		if(placeData && placeData.flightForm) {
			const startdate = new Date(placeData.flightForm.startdate)
			const enddate = new Date(placeData.flightForm.enddate)
			return [startdate, enddate]
		}
	}

	function initialiseForm() {
		if(placeData && placeData.flightForm)
			return {...placeData.flightForm }
		else
			return {
				origin: '',
				adults: 0,
				children: 0
			}
	}

	useEffect(() => {
		if(!placeData)
			navigate('/')
	}, [])

	useEffect(() => {
		if(confirmedModal)
			deleteRecord()
	}, [confirmedModal])

	const tomorrow = () => {
		return new Date(Date.now() + day)
	}

	const nextYear = () => {
		return new Date(Date.now() + day * 365)
	}

	async function deleteRecord() {
		try {
			setOutput('deleting...')
			const res = await trotter.deleteRecord(placeData.recordId)
			navigate(-1)
		} catch(e) {
			setOutput('Sorry there was an issue, could not delete')
		}
	}

	async function save() {
		try {
			setOutput('saving...')
		
			const res = await trotter.save({
				id: placeData.recordId,
				location: placeData.id,
				startdate: dates ? dates[0].getTime() : 0,
				enddate: dates ? dates[1].getTime() : 0,
				origin: flightForm.origin ? flightForm.origin : 'none',
				adults: flightForm.adults ? flightForm.adults : 0,
				children: flightForm.children ? flightForm.children : 0
			})
			setOutput('saved')

		} catch(e) {
			setOutput(e.message)
		}
	}

	function handleSave() {
		save()
	}

	function showDeleteModal() {
		setShowModal('block')
	}

	return (
		<> { placeData && 
		<div>
			<h3 className='w3-center'>{placeData.name}</h3>
			<h4>{placeData.snippet}</h4>
			<Slideshow images={placeData.images}/>
			<Attractions location={placeData.name}/>
			{/* <div>
				<ReactWeather
      			isLoading={isLoading}
      			errorMessage={errorMessage}
      			data={data}
      			lang="en"
      			locationLabel={placeData.name}
      			unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
    			/>
			</div> */}
			<div>
				<Iframe url={`https://www.bing.com/maps/embed?h=400&w=400&cp=${placeData.coordinates.latitude}~${placeData.coordinates.longitude}&lvl=10&typ=d&sty=r&src=SHELL&FORM=MBEDV8`} scrolling="no"
        			width="400px"
        			height="400px"
        			id="myId"
        			className="myClassname"
        			display="initial"
        			position="relative"
				/>
				<a href={`https://www.bing.com/maps?cp=${placeData.coordinates.latitude}~${placeData.coordinates.longitude}&amp;sty=r&amp;lvl=10&amp;FORM=MBEDLD`} target="_blank" rel="noopener noreferrer">View Larger Map</a>
			</div>
			{<div>
				<DateRangePicker onChange={changeDates} value={dates} minDate={tomorrow()} maxDate={nextYear()} isOpen={true}/>
			</div> }
			<FlightForm flightForm={{flightForm, setFlightForm}} destination={placeData.name} dates={dates}/>
			{ userData &&
			<div>
				<button onClick={handleSave}>Save</button>
				{placeData.recordId && <button onClick={showDeleteModal}>Delete</button>}
			</div>
			}
			<ConfirmModal confirm={{setConfirmedModal}} show={{showModal, setShowModal}} />
			{ output && <h2>{output}</h2>}
		</div>
		}</>
	)
}
//<Calendar onChange={onChange} value={value} minDate={tomorrow()} maxDate={nextYear()} selectRange={true} />
//|| placeDataEdit !== placeData}

export default Detail