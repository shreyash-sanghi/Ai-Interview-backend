
import InterviewService from "../services/interview.service.js";
import ResponseHandler from "../utils/responseHandler.utility.js";
import statusCodeUtility from "../utils/statuscode.utility.js";


class InterviewController {

    static async createInterview(request, response, next) {
            const { userId,position,description,experience,techStack,questions } = request.body;
            const data = {
                userId,position,description,experience,techStack,questions
            }
            const result = await InterviewService.createInterview(data) ;
            if(!result){
                return ResponseHandler(statusCodeUtility.Conflict, "unable to create interview", null, response)
            }
            return ResponseHandler(statusCodeUtility.Created, "created successfully", result, response)
    }

    static async findPerticularInterview(request, response, next) {
            const { id } = request.params;
            const result = await InterviewService.findInterview(id) ;
            if(!result){
                return ResponseHandler(statusCodeUtility.NotFound, "they have not any interview", null, response)
            }
            
            return ResponseHandler(statusCodeUtility.Success, "successfully fetch..", result, response)
    }

    static async updateInterview(request, response, next) {
            const { position,description,experience,techStack,questions} = request.body;
            const { id } = request.params;
            const data = {
                position,description,experience,techStack,questions
            }
            const result = await InterviewService.updateInterview(id,data);
            if(!result){
                return ResponseHandler(statusCodeUtility.NotFound, "they will unable to update in previous interview", null, response)
            }
            return ResponseHandler(statusCodeUtility.Created, "update successfully", null, response)
    }

    static async findMyAllInterview(request, response, next) {
            const { uid } = request.params;
            const result = await InterviewService.findAllMyInterview(uid) ;
            if(!result){
                return ResponseHandler(statusCodeUtility.Success, "they have some proble to fetch...", null, response)
            }
            
            return ResponseHandler(statusCodeUtility.Success, "successfully fetch..", result, response)
    }

}


export default InterviewController