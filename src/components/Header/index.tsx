import { Link } from "react-router-dom"
import style from "./style.module.css"
import logo_img from "../../assets/img/logo.png"

export const Header = () =>{

  return (
		<header>
			<div className={style.container}>
				<Link to='/skatepoint-site/'>
					<img className={style.logo} src={logo_img} alt='logo' />
				</Link>
				<nav className={style.nav}>
					<Link to='/'>HOME</Link>
					<Link to='/logs'>LOGS</Link>
					<Link to='/support'>SUPPORT</Link>
					<Link to='https://www.donationalerts.com/r/annoshellor'>DONATE</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header;

