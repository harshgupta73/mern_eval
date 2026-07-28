import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AddCourseForm from './components/AddCourseForm'
import UpdateCourseForm from './components/UpdateCourseForm'
import ShowCourseForm from './components/ShowCourseForm'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addCourseForm' element={<AddCourseForm/>}/>
          <Route path='/updateCourseForm/:id' element={<UpdateCourseForm/>}/>
          <Route path='/showCourseForm/:name' element={<ShowCourseForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App