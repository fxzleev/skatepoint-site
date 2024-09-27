import { Link } from "react-router-dom"
import skatepoint_img from "../../assets/img/skatepoint.png"

const Footer = () =>{
  return (
		<footer className="footer">
			<div className="footer__container">
				<div className="copy">
					<span>&copy; skatepoint.ru</span>
				</div>
				<nav className="nav">
					<div className="nav__container">
						<Link to='/'>HOME</Link>
						<Link to='/logs'>LOGS</Link>
						<Link to='/support'>SUPPORT</Link>
						<Link to='https://www.donationalerts.com/r/annoshellor'>
							DONATE
						</Link>
					</div>
				</nav>
				<div className="about">
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