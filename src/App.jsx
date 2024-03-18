import './App.css'
import Home from './Components/Navbar/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Nav'
import MidScreen from './Components/Navbar/MidScreen'
import Footer from './Components/Navbar/Footer'




function App() {

  return (
    <div>
      <Navbar/>
      <MidScreen/>
      <Footer/>
    </div>
    
  ) 
}

export default App
