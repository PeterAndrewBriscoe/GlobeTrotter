import { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../utils/Context'
import { GlobeTrotter } from '../utils/axios_helper'
import Tab from '../components/Tab'

function Login() {
	const navigate = useNavigate()
	const setUserData  = useContext(Context)
	const [mode, setMode] = useState('Login')
	const [output, setOutput] = useState('')
	const [formData, setFormData] = useState({ username: '', email: '', password: '', confPassword: ''})
	  
	async function authUser() {
		try {
			const trotter = GlobeTrotter()
			const res = await trotter.loginRegUser(formData, mode)
			if(res && res.token) {
				localStorage.setItem('globeTrotterToken', res.token)
				localStorage.setItem('globeTrotterUsername', formData.username)
				localStorage.setItem('globeTrotterEmail', formData.email)
				setUserData({username: formData.username, email: formData.email})
				navigate('/')
			}
		} catch(e) {
			setOutput(e.message)
		}
	}

	const handleFormSubmit = e => {
		e.preventDefault()
		if(mode === 'Register' && formData.password !== formData.confPassword)
			return setOutput('Passwords do not match')
		authUser()
	}

	const handleInput = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value})
	}
	
	  
	return (
		<div className='w3-content w3-container'>
			<div className='w3-padding-64'></div>
			<form className='w3-row' onSubmit={handleFormSubmit}>
				<Tab modeState={{mode, setMode}} title='Login' />
				<Tab modeState={{mode, setMode}} title='Register' />
				<div className='w3-container'></div>
				<input className="w3-input w3-margin-top" type="text" name="username" data-setid='username' value={formData.username} onChange={handleInput} placeholder='username' required />
				{ mode === 'Register' &&
					<input className="w3-input w3-margin-top" type="email" name="email" value={formData.email} onChange={handleInput} placeholder='email' required />
				}
				<input className="w3-input w3-margin-top" type="password" name="password" value={formData.password} onChange={handleInput} placeholder='password' required />
				{ mode === 'Register' &&
					<input className="w3-input w3-margin-top" type="password" name="confPassword" value={formData.confPassword} onChange={handleInput} placeholder='confirm password' required />
				}
				<div className='w3-padding-large'></div>
				<input className="w3-btn w3-mobile w3-round-large w3-blue w3-margin-top" type="submit" data-testid="submit" value="Go"></input>
			</form>
			<div className='w3-panel w3-center w3-text-red'>
				<h4>{output}</h4>
			</div>
		</div>
	)
}

export default Login