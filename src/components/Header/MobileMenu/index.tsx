import { BurgerMenu } from '../BurgerMenu'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleLinkClick = () => {
		setIsOpen(false)
	}

	return (
		<div className='container_mob'>
			<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (
				<div className='container_mob__wrapper'>
					<nav className='container_mob__wrapper__nav'>
						<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : ''} to='/' onClick={handleLinkClick}>
							HOME
						</NavLink>
						<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : ''} to='/logs' onClick={handleLinkClick}>
							LOGS
						</NavLink>
						<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : ''} to='/support' onClick={handleLinkClick}>
							SUPPORT
						</NavLink>
						<Link
							to='https://www.donationalerts.com/r/annoshellor'
							onClick={handleLinkClick}
						>
							DONATE
						</Link>
						<div className="container_mob__wrapper__nav__about">
							<img src="/src/assets/img/skatepoint.png" alt="" />
							<p><strong>SkatePoint</strong> - это увлекательный проект, созданный
						энтузиастами для того чтобы скрасить ваше время препровождение,
						намеренный в будущем стать очень многообещающим проектом.</p>
						<span>&copy; skatepoint.ru</span>
						</div>
					</nav>
				</div>
			)}
		</div>
	)
}
