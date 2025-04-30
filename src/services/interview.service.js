import InterviewRepository from "../repository/interview.repository.js";

class InterviewService{


   static async createInterview(data){
     const result = await InterviewRepository.createInterview(data)
       return result;
   }
   static async updateInterview(id,data){
     const result = await InterviewRepository.updateInterview(id,data)
       return result;
   }
   static async findInterview(id){
     const result = await InterviewRepository.findPersionalInterview(id)
       return result;
   }
   static async findAllMyInterview(uId){
     const result = await InterviewRepository.findAllInterview(uId)
       return result;
   }

}


export default InterviewService