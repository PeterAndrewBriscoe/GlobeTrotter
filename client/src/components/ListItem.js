import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../utils/Context'

function ListItem(props) {
	const { setPlaceData } = useContext(Context)
	const navigate = useNavigate()

	const handleClick = () => {
		setPlaceData(props.data)
		navigate('/detail')
	}

	return(
		<div onClick={handleClick}>
			<h3>{props.data.name}</h3>
		</div>
	)
}

export default ListItem