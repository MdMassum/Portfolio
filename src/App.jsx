// import './App.css'
import Header from "./components/Header"
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
    </>
  )
}

export default App
