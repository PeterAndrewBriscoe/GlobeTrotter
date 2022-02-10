import { useContext } from 'react'
import { Link } from "react-router-dom";
import Context from '../utils/Context'
import UserMenu from './UserMenu';
import globetrotter from "../globetrotter.png"
import './navbar.css'

function Navbar() {
	const { userData, setUserData } = useContext(Context)
	console.log(userData)
	return(
		<nav>
			{/* <Link to=''><h1 id="heading">Globe Trotters</h1></Link> */}
			<div className="flex-container">
				<Link to='/'><img id="logo" src={globetrotter}></img></Link>
			<div id="nav-options">
				{ userData.username ? <><UserMenu setUserData={setUserData}> Menu </UserMenu></> : <div id='login-icon'><Link to='login'>Login / Register</Link></div>}
			</div>
			</div>
		</nav>
	)
}

export default Navbar