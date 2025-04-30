import jwt from "jsonwebtoken";
import { envProvider } from "../constants.js";
import { CustomError } from "../utils/errorHandler.utility.js";
import statusCodeUtility from "../utils/statuscode.utility.js";

class AuthMiddleWares{



    static async userMiddleware(request, response, next){
      const authToken = request.headers?.authorization || request.header?.Authorization;
      if (!authToken) {
        throw new CustomError("please login...",statusCodeUtility.BadRequest);
      }
      const isVerify = await jwt.verify(authToken,envProvider.Auth);
      if(!isVerify){
        throw new CustomError("invalid token...",statusCodeUtility.BadRequest);
     }
     request.id = isVerify;
      next()
    }

}


export default AuthMiddleWares