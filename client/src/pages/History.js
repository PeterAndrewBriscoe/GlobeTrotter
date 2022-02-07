import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../utils/Context'
import { GlobeTrotter } from '../utils/axios_helper'

function History() {
	const navigate = useNavigate()
	const { userData } = useContext(Context)

	useEffect(() => {
		async function getData() {
			const globeTrotter = GlobeTrotter('test token')
			const data = await globeTrotter.getSaved('julie')
			console.log(data)
		}

		if(userData)
			getData()
		else
			navigate('/')
	}, [])

	return (
		<div>
			<h2>History</h2>

		</div>
	)
}

export default History