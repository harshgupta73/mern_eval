const mongoose = require('mongoose');

const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/mern_exam_final')
    .then(() => {
        console.log("connected")
    }).catch((err) => {
        
    });
}

module.exports={connectDB}