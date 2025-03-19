// import './App.css'
import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ScrollUp from "./components/ScrollUp"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import Qualification from "./pages/Qualification/Qualification"
import Skills from "./pages/Skills/Skills"

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {

    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);

  }, [themeMode])

  return (
    <>
      <Header darkTheme={darkTheme} lightTheme={lightTheme} themeMode={themeMode} />
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App
