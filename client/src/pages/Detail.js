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
	const [placeDataEdit, setPlaceDataEdit] = useState(placeData)
	const [showModal, setShowModal] = useState('none')
	const [confirmedModal, setConfirmedModal] = useState(false)
	//const [flightData, setFlightData] = useState(placeData ? placeData.flightData : '')
	const [value, onChange] = useState()
	
	const navigate = useNavigate()
	/*
	const { data, isLoading, errorMessage } = useOpenWeather({
		key: '05997b31df808c81ea6165ee022a8b1c',
		lat: placeData && placeData.coordinates.latitude || 51.509865,	//'48.137154',
		lon: placeData&& placeData.coordinates.longitude || -0.118092,	//'11.576124',
		lang: 'en',
		unit: 'metric', // values are (metric, standard, imperial)
	})*/

	useEffect(() => {
		if(!placeData)
			navigate('/')
	}, [])

	useEffect(() => {
		if(confirmedModal)
			console.log('deleted')
	}, [confirmedModal])

	const tomorrow = () => {
		return new Date(Date.now() + day)
	}

	const nextYear = () => {
		return new Date(Date.now() + day * 365)
	}

	async function save() {
		const mode = ''
		if(placeData.new)
			mode = 'create'
		
		const res = await trotter.save(placeData.data, mode)
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
			{/*<div>
				<ReactWeather
      			isLoading={isLoading}
      			errorMessage={errorMessage}
      			data={data}
      			lang="en"
      			locationLabel={placeData.name}
      			unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
    			/>
			</div>*/}
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
				<DateRangePicker onChange={onChange} value={value} minDate={tomorrow()} maxDate={nextYear()} isOpen={true}/>
			</div> }
			<FlightForm/>
			{ userData &&
			<div>
				<button onClick={handleSave} disabled={!placeDataEdit.new}>Save</button>
				{!placeDataEdit.new && <button onClick={showDeleteModal}>Delete</button>}
			</div>
			}
			<ConfirmModal confirm={{setConfirmedModal}} show={{showModal, setShowModal}} />
			{ confirmedModal &&
			<div>
				<h2>deleting...</h2>
			</div>
			}
		</div>
		}</>
	)
}
//<Calendar onChange={onChange} value={value} minDate={tomorrow()} maxDate={nextYear()} selectRange={true} />
//|| placeDataEdit !== placeData}

export default Detail