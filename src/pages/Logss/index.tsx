import style from './style.module.css'
import image from '../../assets/img/skatepoint.png'

const Logss = () => {
	return (
				<section className={style.logs_cont}>
					<div className={style.logs}>
						<p>LOGS</p>
						<div className={style.create_line}></div>
					</div>
					<div className={style.logo_cont}>
						<img className={style.shake} src={image} alt='logo' />
					</div>
				</section>
	)
}

export default Logss
