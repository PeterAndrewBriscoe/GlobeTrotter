import { useContext, useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css'
import Iframe from 'react-iframe'
import ReactWeather, { useOpenWeather } from 'react-open-weather'
import Context from '../utils/Context'

import Slideshow from '../components/Slideshow'

function Detail() {
	const day = 8.64e7
	const { placeData } = useContext(Context)
	const [value, onChange] = useState()
	const { data, isLoading, errorMessage } = useOpenWeather({
		key: '05997b31df808c81ea6165ee022a8b1c',
		lat: placeData.coordinates.latitude,	//'48.137154',
		lon: placeData.coordinates.longitude,	//'11.576124',
		lang: 'en',
		unit: 'metric', // values are (metric, standard, imperial)
	})

	const tomorrow = () => {
		return new Date(Date.now() + day)
	}

	const nextYear = () => {
		return new Date(Date.now() + day * 365)
	}

	return (
		<div>
			<h3 className='w3-center'>{placeData.name}</h3>
			<h4>{placeData.snippet}</h4>
			<Slideshow images={placeData.images}/>
			{<div>
				<ReactWeather
      			isLoading={isLoading}
      			errorMessage={errorMessage}
      			data={data}
      			lang="en"
      			locationLabel={placeData.name}
      			unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
    			/>
			</div>}
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
			<div>
				<DateRangePicker onChange={onChange} value={value} minDate={tomorrow()} maxDate={nextYear()} isOpen={true}/>
			</div>
		</div>
	)
}
//<Calendar onChange={onChange} value={value} minDate={tomorrow()} maxDate={nextYear()} selectRange={true} />

export default Detail