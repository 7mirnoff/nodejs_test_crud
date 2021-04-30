import Router from 'express'
import { check } from 'express-validator'
import AuthController from '../controllers/auth.js'

// import { authMiddleware } from '../middleware/auth.js'
import { roleMiddleware } from '../middleware/role.js'

const authRouter = new Router()

authRouter.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({ min: 4, max: 10 })
], AuthController.registration)
authRouter.post('/login', AuthController.login)
authRouter.get('/users', roleMiddleware(['ADMIN', 'USER']), AuthController.getUsers)

export default authRouter
