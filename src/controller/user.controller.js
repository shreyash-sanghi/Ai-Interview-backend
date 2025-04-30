
import { envProvider } from "../constants.js";
import UserService from "../services/auth.service.js";
import ResponseHandler from "../utils/responseHandler.utility.js";
import statusCodeUtility from "../utils/statuscode.utility.js";
import bcript from "bcrypt";
import jwt from "jsonwebtoken";
const createToken = (id)=> {
    const token = jwt.sign(id,envProvider.Auth);
    return token;
}
class AuthController {

    static async createUser(request, response, next) {
            const { name,email,number,userId } = request.body;
            const checkUser = await UserService.findAccount(userId);
            if(checkUser){
                return ResponseHandler(statusCodeUtility.Conflict, "account have already present", null, response)
            }
            const data = {
           name:name,email:email,phoneNumber:number,userId
            }
            const newUser = await UserService.createAccount(data) ;
            if(!newUser){
                return ResponseHandler(statusCodeUtility.Conflict, "unable to create account", null, response)
            }
            return ResponseHandler(statusCodeUtility.Created, "Created Successfully", null, response)
    }

    static async findUser(request, response, next) {
            const { id } = request.params;
            const getUser = await UserService.findAccount(id) ;
            if(getUser == null){
                return ResponseHandler(statusCodeUtility.Success, "no acccount", false, response)
            }
            
            return ResponseHandler(statusCodeUtility.Success, "Successfully fetch..", true, response)
    }

}


export default AuthController