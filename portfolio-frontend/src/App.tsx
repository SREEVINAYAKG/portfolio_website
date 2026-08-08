import './App.css'
import Main from './components/Main.tsx'
import Projects from './components/Projects.tsx'
import TechStack from './components/TechStack.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'

export default function App(){
  return (
    <main>
      <NavBar />
      <Main />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  )
}