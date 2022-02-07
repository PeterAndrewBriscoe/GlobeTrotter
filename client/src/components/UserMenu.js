import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserMenu(props) {
	const navigate = useNavigate()
	const [show, setShow] = useState(false)

	const handleShowHide = () => {
		setShow(state => !state)
	}

	const handleLogout = () => {
		localStorage.removeItem('userData')
		props.setUserData('')
		setShow(false)
		navigate('/')
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