import { useState} from 'react'
import { axios_helper as axios } from '../utils/axios_helper'
import Tab from '../components/Tab'

function Login() {
	const [mode, setMode] = useState('Login')
	const [output, setOutput] = useState('')
	const [formData, setFormData] = useState({ email: '', password: '', confPassword: ''})
	  
	async function getData() {
		try {
			const res = await axios.get('/facts')
			console.log(res.data)
		} catch(e) {
			console.log(e.message)
		}
	}

	const handleFormSubmit = e => {
		e.preventDefault()
		if(mode === 'Register' && formData.password !== formData.confPassword)
			return setOutput('passwords do not match')
		getData()
	}

	const handleInput = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value})
	}
	
	  
	return (
		<div className='w3-content login'>
			<form className='w3-row' onSubmit={handleFormSubmit}>
				<Tab modeState={{mode, setMode}} title='Login' />
				<Tab modeState={{mode, setMode}} title='Register' />
				<div className='w3-container'></div>
				<input className="w3-input w3-margin-top" type="email" name="email" value={formData.email} onChange={handleInput} placeholder='username' required />
				<input className="w3-input w3-margin-top" type="password" name="password" value={formData.password} onChange={handleInput} placeholder='password' required />
				{ mode === 'Register' &&
					<input className="w3-input w3-margin-top" type="password" name="confPassword" value={formData.confPassword} onChange={handleInput} placeholder='confirm password' required />
				}
				<div className='w3-padding-large'></div>
				<input className="w3-btn w3-round-large w3-amber w3-margin-top" type="submit" value="Go"></input>
			</form>
			<div className='w3-panel w3-center w3-text-red'>
				<h4>{output}</h4>
			</div>
		</div>
	)
}

export default Login