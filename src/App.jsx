import './App.css'
import AboutMe from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SocialContact from './components/SocialContact'
import Skills from './components/Skills'
import Education from './components/Education'



function App() {
  
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe /> 
      <Education />
      <Skills />
      <Projects />
      <SocialContact />  
      
    </div>
  
      
  )
}

export default App
