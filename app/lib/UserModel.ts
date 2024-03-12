import { User } from "../models/User"


export async function getUserById(userIdd: string){ 
    try {
        
        const userExist = await User.find({_id: userIdd})

        if(userExist) {
            return userExist[0]
        }
        
        return "checking"

    } catch (error) {
        console.log(error)
        return "Sorry error with user id handle"
    }
}