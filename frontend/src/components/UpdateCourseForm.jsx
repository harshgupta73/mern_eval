import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCourseForm = () => {

  const[course,setCourse]=useState({})
  const{id}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:4000/getCourseById/${id}`)
    .then((result) => {
        setCourse(result.data)
    }).catch((err) => {
       console.log(err) 
    });

  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.patch(`http://localhost:4000/updateCourse/${id}`,course)
    .then((result) => {
        navigate('/')
    }).catch((err) => {
        console.log(err)
    });
  }

  return (
    <>
        <div
            class="container"
        >
            <div
                class="row justify-content-center align-items-center g-2"
            >
                <div class="col-4 rounded border shadow mt-5 p-5">
                    <div class="card p-5">
                        <div className='card-header text-center fw-bold'>Update Course Form</div>
                        <form onSubmit={handleSubmit}>
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    value={course.thumbnail}
                                    onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                                />
                                <label for="formId1">Thumbnail</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    value={course.courseName}
                                    onChange={(e)=>setCourse({...course,courseName:e.target.value})}
                                />
                                <label for="formId1">Course Name</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    value={course.instructor}
                                    onChange={(e)=>setCourse({...course,instructor:e.target.value})}
                                />
                                <label for="formId1">Instructor</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    value={course.category}
                                    onChange={(e)=>setCourse({...course,category:e.target.value})}
                                />
                                <label for="formId1">Category</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    value={course.duration}
                                    onChange={(e)=>setCourse({...course,duration:e.target.value})}
                                />
                                <label for="formId1">Duration</label>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    value={course.level}
                                    onChange={(e)=>setCourse({...course,level:e.target.value})}
                                />
                                <label for="formId1">Level</label>
                            </div>
                            
                            <button
                                type="submit"
                                class="btn btn-primary"
                            >
                                Update Course
                            </button>
                            
                            
                            
                            
                        </form>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </>
  )
}

export default UpdateCourseForm