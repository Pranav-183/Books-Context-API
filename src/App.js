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


function App() {
  const [scroll, setScroll] = useState(true)
  return (
    <BooksContextProvider>
      <Router>
        <div className={`bg-zinc-800 h-screen w-screen ${scroll ? 'overflow-y-auto' : 'overflow-y-hidden'} overflow-x-hidden`}>
          <Navbar />
          <AnimatePresence wait>
            <Routes>
              <Route path='/' element={<Books />} />
              <Route path='/:id' element={<Book />} />
              <Route path='/edit' element={<Edit />} />
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