import { db } from '../../database'
import { UserPostRequest, IUser } from '../../interfaces/user'
import { v4 as uuidv4 } from 'uuid'


export const createUserService = ({ nome, email, password }: UserPostRequest) => {
    const emailCheck = db.find(user => user.email === email) 

    if (emailCheck) {
        throw new Error ('Email already exists')
    }

    const newUser: IUser = {
        id: uuidv4(),
        nome, 
        password,
        email
    }

    db.push(newUser)

    return newUser
}
