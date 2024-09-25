import { Link } from "react-router-dom"
import style from "./style.module.css"
import skatepoint_img from "../../assets/img/skatepoint.png"

const Footer = () =>{
  return (
		<footer>
			<div className={style.container}>
				<div className={style.copy}>
					<span>&copy; skatepoint.ru</span>
				</div>
				<nav className={style.nav}>
					<div className={style.nav_container}>
						<Link to='/skatepoint-site/'>HOME</Link>
						<Link to='/skatepoint-site/logs'>LOGS</Link>
						<Link to='/skatepoint-site/support'>SUPPORT</Link>
						<Link to='https://www.donationalerts.com/r/annoshellor'>
							DONATE
						</Link>
					</div>
				</nav>
				<div className={style.about}>
					<img src={skatepoint_img} alt='logo' />
					<p>
						<span>SkatePoint</span> - это увлекательный проект, созданный
						энтузиастами для того чтобы скрасить ваше время препровождение,
						намеренный в будущем стать очень многообещающим проектом.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;