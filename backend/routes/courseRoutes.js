const express = require('express');
const { addCourse, updateCourse, deleteCourse, getBlogById, getAllBlogs, getCourseByName } = require('../controllers/courseController');

const courseRouter = express.Router()

courseRouter.post("/addCourse",addCourse)
courseRouter.patch("/updateCourse/:id",updateCourse)
courseRouter.delete("/deleteCourse/:id",deleteCourse)
courseRouter.get("/getCourseById/:id",getBlogById)
courseRouter.get("/getAllCourses",getAllBlogs)
courseRouter.get("/getCourseByName/:name",getCourseByName)

module.exports=courseRouter;