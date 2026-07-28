import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {

  const[courses,setCourses]=useState([])
  const navigate=useNavigate()
  
  useEffect(()=>{
    axios.get('http://localhost:4000/getAllCourses')
    .then((result) => {
        setCourses(result.data)
    }).catch((err) => {
        console.log(err)
    });
  },[])


  return (
    <>
        <div
            className="container mt-3"
        >
            <div
                className="row justify-content-center align-items-center g-4"
            >
                {
                    courses.map((course)=>(
                        <div className="col-4">
                            <div className="card h-100">
                                <img className="card-img-top" src={course.thumbnail} alt="Title" style={{height:'250px',objectFit:'fill',border:'2px solid black'}}/>
                                <div className="card-body">
                                    <h4 className="card-title">{course.courseName}</h4>
                                    <p className="card-text">{course.instructor}</p>
                                    <p className="card-text">{course.category}</p>
                                    <p className="card-text">{course.duration}</p>
                                    <p className="card-text">{course.level}</p>
                                    <NavLink
                                        name=""
                                        id=""
                                        className="btn btn-warning me-3"
                                        to={`/updateCourseForm/${course._id}`}
                                        role="button"
                                        >Edit</NavLink
                                    >

                                    <button
                                        type="button"
                                        className="btn btn-danger me-3"
                                        onClick={()=>{
                                            axios.delete(`http://localhost:4000/deleteCourse/${course._id}`)
                                            .then((result) => {
                                                navigate('/addCourseForm')
                                            }).catch((err) => {
                                                console.log(err)
                                            });
                                        }}
                                    >
                                        Delete
                                    </button>
                                    
                                    
                                </div>
                            </div>
                            
                        </div>
                    ))
                    
                }
                
            </div>
            
        </div>
        
    </>
  )
}

export default Home