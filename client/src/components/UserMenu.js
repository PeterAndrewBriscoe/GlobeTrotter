import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobeTrotter } from '../utils/axios_helper'

function UserMenu(props) {
	const navigate = useNavigate()
	const [show, setShow] = useState(true)

	const handleShowHide = () => {
		setShow(state => !state)
	}

	const handleLogout = () => {
		
		async function logout() {
			try {
				const globeTrotter = GlobeTrotter(localStorage.getItem('globeTrotterToken'))
				await globeTrotter.logout()
				localStorage.removeItem('globeTrotterToken')
				localStorage.removeItem('globeTrotterUsername')
				props.setUserData('')
				navigate('/')
				
			} catch(e) {
				console.log(e.message)
			}
		}

		logout()
		setShow(false)
	}

	return(
		<div>
			{/* <i className="bi bi-person-circle user-icon" data-testid='hide' onClick={handleShowHide}></i> */}
			{ show &&
				<div className='user-menu'>
					<ul>
						<li className="menu-item" onClick={() => { navigate('/history')}} data-testid='historyButton'>History</li>
						<li className="menu-item" onClick={handleLogout} role='Logout'>Logout</li>
					</ul>
				</div>
			}
		</div>
	)
}

export default UserMenu