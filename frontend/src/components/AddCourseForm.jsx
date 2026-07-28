import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddCourseForm = () => {
  const[course,setCourse]=useState({courseName:'',instructor:'',category:'',duration:0,level:'',thumbnail:''})
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/addCourse',course)
    .then((result) => {
        navigate('/')
    }).catch((err) => {
        console.log(err)
    });
  }


  return (
    <>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col-4 rounded border shadow mt-5 p-5">
                    <div className="card h-100 p-5">
                        <div className='card-header text-center fw-bold'>Add Course Form</div>
                        <form onSubmit={handleSubmit}>
                        
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                                />
                                <label for="formId1">Thumbnail</label>
                            </div>
                            

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,courseName:e.target.value})}
                                />
                                <label for="formId1">Course Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,instructor:e.target.value})}
                                />
                                <label for="formId1">Instructor</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,category:e.target.value})}
                                />
                                <label for="formId1">Category</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,duration:e.target.value})}
                                />
                                <label for="formId1">Duration</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,level:e.target.value})}
                                />
                                <label for="formId1">Level</label>
                            </div>
                            
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Add Course
                            </button>
                            
                            
                            
                        </form>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default AddCourseForm