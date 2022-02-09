import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../utils/Context'
import { GlobeTrotter } from '../utils/axios_helper'
import ListItem from '../components/ListItem'

function History() {
	const navigate = useNavigate()
	const userData = useContext(Context)
	const [list, setList] = useState('')

	useEffect(() => {
		async function getData() {
			const trotter = GlobeTrotter(localStorage.getItem('globeTrotterToken'))
			const data = await trotter.getSaved(userData)
			return setList(data.places)
		}
		if(userData)
			getData()
		else
			navigate('/')
	}, [])

	return (
		<div>
			<h2>History</h2>
			<div>
			{ list &&
         	<div className="w3-container">
              	{list.map((e, i)=> <ListItem key={`place${i}`} data={e} />)}
            </div>
         }
			</div>
		</div>
	)
}

export default History