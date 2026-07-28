import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const ShowCourseForm = () => {
  const[course,setCourse]=useState({})
  const{name}=useParams()

  useEffect(()=>{
    axios.get(`http://localhost:4000/getCourseByName/${name}`)
    .then((result) => {
        setCourse(result.data)
    }).catch((err) => {
        console.log(err)
    });
  },[])
  return (
    <>
        <div
            className="container mt-5"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col-4">
                    <div className="card">
                        <div className='card-header fw-bold text-center'>Show Course Form</div>
                        <img className="card-img-top" src={course.thumbnail} alt="Title" />
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
                
            </div>
            
        </div>
        
    </>
  )
}

export default ShowCourseForm