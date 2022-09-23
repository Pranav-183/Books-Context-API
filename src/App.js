import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Books from './Books'
import Book from './Book'
import BooksContextProvider from './Context/BooksContextProvider'
import Navbar from './Navbar'
import Edit from './Edit'
import EditOne from './EditOne'
import About from './About'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './App.css'


function App() {
  const [scroll, setScroll] = useState(true)

  return (
    <BooksContextProvider>
      <Router>
        <div className="all bg-zinc-800 h-screen w-screen overflow-hidden">
          <Navbar />
          <AnimatePresence wait>
            <Routes>
              <Route path='/' element={<Books setScroll={setScroll} />} />
              <Route path='/:id' element={<Book setScroll={setScroll} />} />
              <Route path='/edit' element={<Edit setScroll={setScroll} />} />
              <Route path='/edit/:editid' element={<EditOne setScroll={setScroll} />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </BooksContextProvider >
  )
}

export default App