import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <ToastContainer />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout
