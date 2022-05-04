import { Router } from 'express'
import userController from './controllers/user/user.controllers'

const router = Router()

const userControllers = new userController()

router.get('', userControllers.index)
router.post('/signup', userControllers.store)

export default router