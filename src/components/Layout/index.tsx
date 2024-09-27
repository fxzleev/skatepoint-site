import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"

const Layout = () =>{
  return(
    <div className="body">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout