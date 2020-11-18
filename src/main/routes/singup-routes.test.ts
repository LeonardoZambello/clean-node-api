import request from 'supertest'
import app from '../config/app'

describe('Singup Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/singup')
      .send({
        name: 'Leonardo',
        email: 'leonardo.zambello@hotmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
