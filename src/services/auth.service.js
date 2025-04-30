import UserRepository from "../repository/auth.repository.js";

class UserService{


   static async createAccount(data){
     const newUser = await UserRepository.createNewUser(data)
       return newUser;
   }
   static async findAccount(id){
     const result = await UserRepository.findUserAccount(id)
       return result;
   }

}


export default UserService