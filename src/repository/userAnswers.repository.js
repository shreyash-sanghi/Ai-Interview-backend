import userAnswersModel from "../models/userAnswers.model.js"

class InterviewRepository{
    static async createAnswer(data){
        const result = await userAnswersModel.create(data);
        return result;
    }
    static async findPersionalAns(userId,question){
        const result = await userAnswersModel.findOne({userId,question});
        return result;
    }

    static async findAllAnswerOfPerticularInterview(uId,mockIdRef ){
        const result = await userAnswersModel.find({userId:uId,mockIdRef:mockIdRef});
        return result;
    }
 
}




export default InterviewRepository