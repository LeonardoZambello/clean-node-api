import { Router } from 'express'
import { makeSingUpController } from '../factorys/singup/singup'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeLoginController } from '../factorys/login/login-factory'

export default (router: Router): void => {
  router.post('/singup', adaptRoute(makeSingUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
