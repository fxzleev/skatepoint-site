import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"
import style from "./style.module.css"

const Layout = () =>{
  return(
    <div className={style.body}>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout