import { Link } from "react-router-dom"
import style from "./style.module.css"

const NotFound = () =>{
  return (
		<section className={style.count}>
			<div className={style.container}>
				<h2>NOT FOUND</h2>
				<Link to='/skatepoint-site/'>HOME</Link>
			</div>
		</section>
	)
}

export default NotFound;