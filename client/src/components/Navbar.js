import { useContext } from 'react'
import { Link } from "react-router-dom";
import Context from '../utils/Context'
import UserMenu from './UserMenu';
import globetrotter from "../globetrotter.png"

function Navbar() {
	const { userData, setUserData } = useContext(Context)
	return(
		<nav>
			{/* <Link to=''><h1 id="heading">Globe Trotters</h1></Link> */}
			<div className="flex-container">
				<Link to='/'><img id="logo" src={globetrotter}></img></Link>
			</div>
			{ userData ? <UserMenu setUserData={setUserData}/> : <Link to='login'>Login/Register</Link> }
		</nav>
	)
}

export default Navbar