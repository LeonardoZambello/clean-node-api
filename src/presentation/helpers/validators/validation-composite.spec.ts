import { MissingParamError } from '../../errors'
import { Validation } from './validation'
import { ValidationComposite } from './validation-composite'

describe('Validation Composite', () => {
  test('Should return an error if any validation fails', () => {
    class ValidationStube implements Validation {
      validate (input: any): Error {
        return new MissingParamError('field')
      }
    }
    const validationStube = new ValidationStube()
    const sut = new ValidationComposite([validationStube])
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
