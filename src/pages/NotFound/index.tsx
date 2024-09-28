import { Link } from "react-router-dom"

const NotFound = () =>{
  return (
		<section className='notfound'>
			<div className='notfound__container'>
				<h2>NOT FOUND</h2>
				<Link to='/'>HOME</Link>
			</div>
		</section>
	)
}

export default NotFound;