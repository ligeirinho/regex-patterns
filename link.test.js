const regexPatterns = require('./regex.js')

test('Check by regex', () => {
  expect(regexPatterns.url.test('https://github.com')).toBeTruthy()
  expect(regexPatterns.url.test('https://github.com/tiagoporto')).toBeTruthy()
})

// import describe from 'ava'
// import { regexPatterns } from './regex.js'


// describe('Check by regex', t => {
//   t.regex('https://github.com', regexPatterns.url)
//   t.regex('https://github.com/tiagoporto', regexPatterns.url)
// })

// describe('Check by method', t => {
//   t.true(regexPatterns.isUrl('https://github.com'))
//   t.true(regexPatterns.isUrl('https://github.com/tiagoporto'))
// })

