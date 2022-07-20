import '../styles/globals.css'
import Nav from '../components/navbar'
import Footer from '../components/footer'
import SEO from '../components/seo'

function MyApp({ Component, pageProps }) {
  return <>
    <SEO />
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
