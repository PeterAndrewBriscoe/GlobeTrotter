import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../utils/Context'
import axios from 'axios'

function ListItem(props) {
	const { setPlaceData } = useContext(Context)
	const navigate = useNavigate()

	async function getPlaceData() {
		try {
			console.log('fetch')
			const data = await axios.get(`https://www.triposo.com/api/20220104/location.json?id=${props.data.location}&account=IG3CBP2Q&token=3f71d5kylylwplhj7wu5ikwa4yds3dlj`)
			const flightForm = {
				origin: props.data.origin,
				startdate: props.data.startdate,
				enddate: props.data.enddate,
				adults: props.data.adults,
				children: props.data.children
			}
			setPlaceData({...props.data, ...data.data.results[0], flightForm: flightForm})
			navigate('/detail')
		} catch(e) {

		}
	}

	const handleClick = () => {
		getPlaceData()
	}

	return(
		<div onClick={handleClick}>
			<h3>{props.data.location}</h3>
			<h3>{new Date(props.data.startdate).toLocaleDateString()}</h3>
			<h3>{new Date(props.data.enddate).toLocaleDateString()}</h3>
		</div>
	)
}

export default ListItem