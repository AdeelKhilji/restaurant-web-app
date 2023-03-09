import '../styles/globals.css'
import Navbar from '../components/navbar_component/navbar_component'
import { ChakraProvider} from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  
  return <>
    <Navbar />

    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  
}

export default MyApp
