const validate = require('../validate')
const red = require('chalk').red

describe('validate.projectName', () => {
  it('should return True if it is valid for new packages', () => {
    expect(validate.projectName('aps-cli')).toBeTruthy
  })

  it('should return a message if it is not valid for new packages', () => {
    expect(validate.projectName('INVALID')).toBe(
      red('name can no longer contain capital letters')
    )
  })
})
