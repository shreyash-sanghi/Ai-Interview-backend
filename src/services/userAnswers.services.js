import userAnswersRepository from "../repository/userAnswers.repository.js";

class userAnswersSchema{


   static async create(data){
     const result = await userAnswersRepository.createAnswer(data)
       return result;
   }

   static async personalAnswer(userId,question){
     const result = await userAnswersRepository.findPersionalAns(userId,question)
       return result;
   }
   static async interviewAnswers(uId,mockIdRef ){
     const result = await userAnswersRepository.findAllAnswerOfPerticularInterview(uId,mockIdRef )
       return result;
   }

}


export default userAnswersSchema