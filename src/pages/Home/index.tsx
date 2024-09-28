import { Link } from 'react-router-dom'
import skatepoint_img from '../../assets/img/skatepoint.png'

const Home = () => {
	return (
		<section className='main'>
			<div className='play'>
				<img className='shake' src={skatepoint_img} alt='logo' />
				<Link to='/play'>PLAY</Link>
			</div>
		</section>
	)
}

export default Home
