import express from "express"
import userRouter from "./customRoutes/users.route.js";
import interviewRouter from "./customRoutes/interview.route.js";
import userAnswer from "./customRoutes/userAnswers.route.js";

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/interview", interviewRouter);
mainRouter.use("/userAnswer", userAnswer);


export default mainRouter