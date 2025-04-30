
import userAnswersService from "../services/userAnswers.services.js";
import ResponseHandler from "../utils/responseHandler.utility.js";
import statusCodeUtility from "../utils/statuscode.utility.js";


class InterviewController {

    static async createAnswer(request, response, next) {
            const { mockIdRef,question,correct_ans,user_ans,feedback,rating,userId } = request.body;
            const data = {
                mockIdRef,question,correct_ans,user_ans,feedback,rating,userId
            }
            const result = await userAnswersService.create(data) ;
            if(!result){
                return ResponseHandler(statusCodeUtility.Conflict, "they have dificulty to save answer", null, response)
            }
            return ResponseHandler(statusCodeUtility.Created, "created successfully", result, response)
    }

    static async findPerticularAnswer(request, response, next) {
            const {userId,question} = request.body;
          
            const result = await userAnswersService.personalAnswer(userId,question) ;
            if(result == null){
                return ResponseHandler(statusCodeUtility.Success, "they have no answer", false, response)
            }
            return ResponseHandler(statusCodeUtility.Success, "successfully fetch..", true, response)
    }

   
    static async interviewAnswers(request, response, next) {
            const { uId,mockIdRef } = request.params;
            const result = await userAnswersService.interviewAnswers(uId,mockIdRef ) ;
            if(!result){
                return ResponseHandler(statusCodeUtility.Success, "not have any answer", null, response)
            }
            
            return ResponseHandler(statusCodeUtility.Success, "successfully fetch..", result, response)
    }

}


export default InterviewController