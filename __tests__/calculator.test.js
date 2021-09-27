const functionToExport = require('../calculator')
const divide = require('../calculator')
// const { TestWatcher } = require('@jest/core')
// const { ExpectationFailed } = require('http-errors')

describe('calculator library', () => {
  test(`average of '12' to '3' should return '4'`, () => {
    const expectedOutput = '4'
    const actualOutput = findAverage('12', '3')
    expect(actualOutput).toBe(expectedOutput)
  })

  test(`average of '12' to '4' should return '3'`, () => {
    const expectedOutput = '3'
    const actualOutput = findAverage('12', '4')
    expect(actualOutput).toBe(expectedOutput)
  })

  test(`average of string format 'coyotiv' to 'photos' should return 0`, () => {
    expect(() => findAverage('coyotiv', 'photos')).toThrow(TypeError)
  })
})
