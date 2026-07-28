import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const[name,setName]=useState('')
  const navigate=useNavigate()

  

  return (
    <>
        <nav
            className="navbar navbar-expand-sm navbar-light bg-light"
        >
            <div className="container">
                <NavLink className="navbar-brand" to="/">Course</NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" aria-current="page"
                                >Home
                                <span className="visually-hidden">(current)</span></NavLink
                            >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addCourseForm">Add Course</NavLink>
                        </li>
                        
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <NavLink
                            name=""
                            id=""
                            className="btn btn-primary"
                            to={`/showCourseForm/${name}`}
                            role="button"
                            >Search</NavLink
                        >
                        
                    </form>
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar