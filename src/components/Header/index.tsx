import { NavLink, Link } from "react-router-dom"
import logo_img from "../../assets/img/logo.png"

export const Header = () =>{

  return (
		<header className="header">
			<div className="header__container">
				<Link to='/' className="logo">
					<img src={logo_img} alt='logo' />
				</Link>
				<nav className="nav">
					<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : '' } to='/'>HOME</NavLink>
					<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : '' } to='/logs'>LOGS</NavLink>
					<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : '' } to='/support'>SUPPORT</NavLink>
					<Link to='https://www.donationalerts.com/r/annoshellor'>DONATE</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header;

