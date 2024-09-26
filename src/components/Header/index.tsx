import { NavLink, Link } from "react-router-dom"
import style from "./style.module.css"
import logo_img from "../../assets/img/logo.png"

export const Header = () =>{

  return (
		<header>
			<div className={style.container}>
				<Link to='/'>
					<img className={style.logo} src={logo_img} alt='logo' />
				</Link>
				<nav className={style.nav}>
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

