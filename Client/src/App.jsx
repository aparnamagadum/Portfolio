import './App.css'
import Project from './components/projectSection/Project'
import { BrowserRouter  ,Routes ,Route} from "react-router-dom";
import Skills from './components/skills/Skills'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume';
import About from './components/about/About';
// import Nav from './components/navbar/Nav'
// import Footer from './components/footer/Footer'
function App() {
 return (
  <>
  <BrowserRouter>
      <Routes>
       <Route  path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/project"  element={<Project/>}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/resume"  element={<Resume />}/>
      </Routes>
    </BrowserRouter> 
  </>
 )
  
}

export default App
