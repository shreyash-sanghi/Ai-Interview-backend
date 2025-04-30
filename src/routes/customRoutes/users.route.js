import express from "express"
import asyncHandler from "../../utils/asyncHandler.js"
import userController from "../../controller/user.controller.js";

const AuthRouter = express.Router()

AuthRouter.post("/create-profile",asyncHandler(userController.createUser))

AuthRouter.get("/get-user-account/:id", asyncHandler(userController.findUser))


export default AuthRouter