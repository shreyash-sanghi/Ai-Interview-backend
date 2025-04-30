import express from "express"
import asyncHandler from "../../utils/asyncHandler.js"
import userAnswersController from "../../controller/useAnswers.controller.js";

const userAnswersRouter = express.Router()

userAnswersRouter.post("/create-userAnswer",asyncHandler(userAnswersController.createAnswer))
userAnswersRouter.post("/get-single-answer", asyncHandler(userAnswersController.findPerticularAnswer))
userAnswersRouter.get("/get-all-interview-answer/:uId/:mockIdRef", asyncHandler(userAnswersController.interviewAnswers))


export default userAnswersRouter