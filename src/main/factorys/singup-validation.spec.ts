import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { makeSingUpValidation } from './singup-validation'

jest.mock('../../presentation/helpers/validators/validation-composite')

describe('SingUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    makeSingUpValidation()
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
