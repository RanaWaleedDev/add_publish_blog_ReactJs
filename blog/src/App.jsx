import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogForm from './BlogForm'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Home'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/blog' element={<BlogForm/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
          {/* Set the default route to /register and redirect to it */}
        <Route
          index
          element={<Navigate to="/blog" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
