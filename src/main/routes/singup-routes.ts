import { Router } from 'express'
import { makeSingUpController } from '../factorys/singup/singup'
import { adaptRoute } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/singup', adaptRoute(makeSingUpController()))
}
