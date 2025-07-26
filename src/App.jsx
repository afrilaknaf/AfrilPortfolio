import Hero from "./sections/Hero"
import Showcases from "./sections/Showcases"
import Navbar from "./components/Navbar"
import Logosection from "./sections/Logosection"
import Features from "./sections/Features"
import Experience from "./sections/Experience"
import Techstack from "./sections/Techstack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    
    <>
    <Navbar/>
     <Hero/>
     <Showcases/>
     <Logosection/>
     <Features/>
     <Experience/>
     <Techstack/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App