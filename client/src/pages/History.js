import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../utils/Context'
import { GlobeTrotter } from '../utils/axios_helper'
import ListItem from '../components/ListItem'
import './history.css'

function History() {
	const navigate = useNavigate()

	const { userData } = useContext(Context)
	const [output, setOutput] = useState('loading...')

	const [list, setList] = useState('')

	useEffect(() => {
		async function getData() {
			const trotter = GlobeTrotter(localStorage.getItem('globeTrotterToken'))
			const data = await trotter.getHistory()
			
			for(const e of data) {
				e.recordId = e.id
				delete e.id
			}
			setList(data)
			setOutput('')
		}
		if(userData)
			getData()
		else
			navigate('/')
	}, [])

	return (
		<div className='history'>
			<h2>History</h2>
			<h3>{output}</h3>
			<div className='saved'>
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