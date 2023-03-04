import '../styles/globals.css'
import Navbar from '../components/navbar_component/navbar_component'
function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    </>
  
}

export default MyApp
