import { Link } from "react-router-dom"

const NotFound = () =>{
  return (
		<section className="count">
			<div className="container">
				<h2>NOT FOUND</h2>
				<Link to='/'>HOME</Link>
			</div>
		</section>
	)
}

export default NotFound;