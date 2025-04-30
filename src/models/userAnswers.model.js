import mongoose from "mongoose";

const userAnswersSchema = new mongoose.Schema({
    mockIdRef:{
        type: String,
        required: true,
        trim:true
    },
    question:{
        type: String,
        required: true,
        trim:true
    },
    correct_ans:{
        type: String,
        required: true,
        trim:true
    },
    user_ans:{
        type: String,
        required: true,
        trim:true
    },
    feedback: {
        type: String,
        required: true,
        unique:true
    },
    rating: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('userAnswers', userAnswersSchema);