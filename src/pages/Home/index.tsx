import { Link } from 'react-router-dom'
import skatepoint_img from '../../assets/img/skatepoint.png'
import style from './style.module.css'

const Home = () => {
	return (
		<section className={style.main}>
			<div className={style.play}>
				<img className={style.shake} src={skatepoint_img} alt='logo' />
				<Link to='/play'>PLAY</Link>
			</div>
		</section>
	)
}

export default Home
