import React from 'react'
import './App.css'
import TicTacTocGame from './components/TicTacTocGame'
import MainPage from './components/MainPage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
     <> 
     <div>
      <Router>
        <Routes>
          <Route path="/" element={(<MainPage/>)}></Route>
          <Route path="/TicTacTocGame" element={(<TicTacTocGame/>)}></Route>
        </Routes>
      </Router>
         
     </div>
     </> 
  )
}

export default App
