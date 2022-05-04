import { Request, Response } from 'express'
import { createUserService } from '../../services/user/createUser.service'
import { listUserService } from '../../services/user/listUser.service'

interface ResponsePost {
  email: string;
  id: string;
  nome: string;
}

export default class userController {
  store(request: Request, response: Response) {
    try {
      const userBody = request.body
      const { id, nome, email } = createUserService(userBody)
      return response.status(201).json({ id, nome, email })
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          error: err.name,
          message: err.message,
        })
      }
    }
  }
  index(request: Request, response: Response) {
    try {
      const users = listUserService()
      const usersWithoutPassword = users.map(({ email, id, nome}) => ({ id, nome, email }))
      return response.json(usersWithoutPassword)
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          error: err.name,
          message: err.message,
        })
      }
    }
  }
}
