import express from "express"
import asyncHandler from "../../utils/asyncHandler.js"
import InterviewController from "../../controller/interview.controller.js";

const interviewRouter = express.Router()

interviewRouter.post("/create-interview",asyncHandler(InterviewController.createInterview))
interviewRouter.put("/update-interview/:id",asyncHandler(InterviewController.updateInterview))

interviewRouter.get("/get-my-interview/:id", asyncHandler(InterviewController.findPerticularInterview))
interviewRouter.get("/get-my-all-interview/:uid", asyncHandler(InterviewController.findMyAllInterview))


export default interviewRouter