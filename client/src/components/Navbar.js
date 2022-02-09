import { useContext } from 'react'
import { Link } from "react-router-dom";
import Context from '../utils/Context'
import UserMenu from './UserMenu';

function Navbar() {
	const { userData, setUserData } = useContext(Context)
	return(
		<nav>
			<Link to='/'><h1 id="heading">Globe Trotters</h1></Link>
			{ userData ? <UserMenu setUserData={setUserData}/> : <Link to='login'>Login/Register</Link> }
		</nav>
	)
}

export default Navbar