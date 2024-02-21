import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header'
import Body from './components/Body'
import NavBar from './components/NavBar';
function App() {
  const [count, setCount] = useState(0)


  return (
   
      <div className='app' >
        {/* <Header/> */}
        
        <Router>
        <NavBar/>
          <Routes>
            <Route path='' element={<Body/>} ></Route>
          </Routes>
        </Router>
      </div>
      
      
    
  )
}

export default App
