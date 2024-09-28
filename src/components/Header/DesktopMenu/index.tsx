import { Link, NavLink } from 'react-router-dom'

export const DesktopMenu = () => {
	return (
		<nav className='navdesk'>
			<div className="navdesk__cont">
				<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : ''} to='/'>HOME</NavLink>
				<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : ''} to='/logs'>LOGS</NavLink>
				<NavLink className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : ''} to='/Support'>SUPPORT</NavLink>
				<Link to='https://www.donationalerts.com/r/annoshellor'>DONATE</Link>
			</div>
		</nav>
	)
}
