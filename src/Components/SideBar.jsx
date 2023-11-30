import styles from "./Sidebar.module.css"
import AppNav from "./AppNav"
import Logo from "./Logo"
import Footer from "./Footer"

const SideBar = () => {
  return (
      <div className={styles.sidebar}>
          <Logo />
          <AppNav />
          
          <p>List Of cities</p>
          
          
         <Footer />
    </div>
  )
}

export default SideBar