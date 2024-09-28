import { Link } from "react-router-dom"
import logo_img from "../../assets/img/logo.png"
import { useIsMobile } from '../../hooks/useMobile'
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"

export const Header = () =>{
	const isMobile = useIsMobile()

  return (
		<header className='header'>
			<div className='header__container'>
				<Link to='/' className='logo'>
					<img src={logo_img} alt='logo' />
				</Link>
				{isMobile ? <MobileMenu /> : <DesktopMenu />}
			</div>
		</header>
	)
}

export default Header;

