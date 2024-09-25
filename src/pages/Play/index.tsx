import { Link } from 'react-router-dom'
import style from './style.module.css'
import imageTg from '../../assets/img/tg_play.png'
import imageYa from '../../assets/img/ya_play.png'

const Play = () => {
	return (
				<div className={style.play_cont}>
					<div className={style.tg_cont}>
						<img src={imageTg} alt='play' />
						<Link to='https://t.me/SkatepointBot'>PLAY</Link>
					</div>
					<div className={style.ya_cont}>
						<img src={imageYa} alt='play' />
						<Link to=''>
							PLAY<span>(В разработке)</span>
						</Link>
					</div>
				</div>
	)
}

export default Play
