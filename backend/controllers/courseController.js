const courseModel = require("../models/courseModel");


const addCourse=async(req,res)=>{
    try {
        const{courseName,instructor,category,duration,level,thumbnail}=req.body;
        const course=await courseModel.create({courseName,instructor,category,duration,level,thumbnail})
        res.status(201).json(course)
    } catch (error) {
        console.log(error)
    }
}

const updateCourse=async(req,res)=>{
    try {
        const{courseName,instructor,category,duration,level,thumbnail}=req.body;
        const course= await courseModel.findByIdAndUpdate(req.params.id,{courseName,instructor,category,duration,level,thumbnail},{new:true,runValidators:true})
        if(!course){
            return res.status(404).send("Course not found")
        }

        res.status(200).json(course)
    } catch (error) {
        console.log(error)
    }
}

const deleteCourse=async(req,res)=>{
    try {
        const course= await courseModel.findByIdAndDelete(req.params.id)
        if(!course){
            return res.status(404).send("Course not found")
        }
        res.status(200).json({"message":"User deleted"})
    } catch (error) {
        console.log(error)
    }
}

const getBlogById=async(req,res)=>{
    try {
        const course= await courseModel.findById(req.params.id)
        if(!course){
            return res.status(404).send("Course not found")
        }
        res.status(200).json(course)
    } catch (error) {
        console.log(error)
    }
}

const getAllBlogs = async(req,res)=>{
    try {
        const courses = await courseModel.find()
        res.status(200).json(courses)
    } catch (error) {
        console.log(error)
    }
}

const getCourseByName =async(req,res)=>{
    try {
        const course = await courseModel.findOne({courseName:req.params.name})
        if(!course){
            res.status(404).json({'message':'course not found'})
        }
        res.status(200).json(course)
    } catch (error) {
        console.log(error)
    }
}

module.exports={addCourse,updateCourse,deleteCourse,getBlogById,getAllBlogs,getCourseByName}