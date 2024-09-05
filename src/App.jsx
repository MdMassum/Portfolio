// import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import ScrollUp from "./components/ScrollUp"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Qualification from "./pages/Qualification/Qualification"
import Skills from "./pages/Skills/Skills"

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Contact/>
      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App
