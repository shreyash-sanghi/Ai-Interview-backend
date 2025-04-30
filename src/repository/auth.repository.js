import userModel from "../models/user.model.js"

class AuthRepository{
    static async createNewUser(data){
        const result = await userModel.create(data);
        return result;
    }

    static async findUserAccount(id){
        const result = await userModel.findOne({userId:id});
        return result;
    }
 
}




export default AuthRepository