import mongoose from "mongoose";



const InterviewSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        trim:true
    },
    position:{
        type: String,
        required: true,
        trim:true
    },
    description: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    techStack: {
        type: String,
        unique:true
    },
    questions:[{ question: String, answer: String }]
}, { timestamps: true });

export default mongoose.model('Interview', InterviewSchema);