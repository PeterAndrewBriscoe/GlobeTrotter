import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobeTrotter } from '../utils/axios_helper'

function UserMenu(props) {
	const navigate = useNavigate()
	const [show, setShow] = useState(false)

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
			<i className="bi bi-person-circle user-icon" onClick={handleShowHide}></i>
			{ show &&
				<div className='user-menu'>
					<ul>
						<li className="menu-item" onClick={() => { setShow(false); navigate('/history')}}>History</li>
						<li className="menu-item" onClick={handleLogout}>Logout</li>
					</ul>
				</div>
			}
		</div>
	)
}

export default UserMenu