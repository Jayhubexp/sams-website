import './App.css'
import Home from './Components/Navbar/Home'
import { Routes, Route } from 'react-router-dom'





function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/education' element={<h1>University of Ghana</h1>} />
      </Routes>
     
    </div>
    
  ) 
}

export default App
