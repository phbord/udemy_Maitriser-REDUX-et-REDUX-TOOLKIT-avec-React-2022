import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AddBooks from './containers/AddBooks'
import SearchBooks from './containers/SearchBooks'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<AddBooks />} />
          <Route exact path='/search' element={<SearchBooks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
