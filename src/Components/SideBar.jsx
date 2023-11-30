import styles from "./Sidebar.module.css"
import AppNav from "./AppNav"
import Logo from "./Logo"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const SideBar = () => {
  return (
      <div className={styles.sidebar}>
          <Logo />
          <AppNav />
          
        <Outlet />
          
          
         <Footer />
    </div>
  )
}

export default SideBar