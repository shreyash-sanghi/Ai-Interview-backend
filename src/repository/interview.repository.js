import InterviewModel from "../models/interview.model.js"

class InterviewRepository{
    static async createInterview(data){
        const result = await InterviewModel.create(data);
        return result;
    }

    static async updateInterview(id,data){
        const result = await InterviewModel.findOneAndUpdate(
            { _id: id }, data ,
            { new: true }
        );
        console.log(result)
        return result;
    }

    static async findPersionalInterview(id){
        const result = await InterviewModel.findById(id);
        return result;
    }
    static async findAllInterview(uId){
        const result = await InterviewModel.find({userId:uId});
        return result;
    }
 
}




export default InterviewRepository