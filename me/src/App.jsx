import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)


  return (
   
      <div className='app' >
        <Header/>
        {/* <Router>
          <Routes>
            <Route></Route>
          </Routes>
        </Router> */}
      </div>
      
      
    
  )
}

export default App
