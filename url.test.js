const regexPatterns = require('./regex.js')

describe('Url tests', () => {
  test('Check by regex', () => {
    expect('https://github.com').toMatch(regexPatterns.url)
    expect('https://github.com/tiagoporto').toMatch(regexPatterns.url)
  })

  test('Check by method', () => {
    expect(regexPatterns.isUrl('https://github.com')).toBeTruthy()
    expect(regexPatterns.isUrl('https://github.com/tiagoporto')).toBeTruthy()
  })
})

