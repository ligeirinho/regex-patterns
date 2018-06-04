import describe from 'ava'
import { regexPattern } from './regex.js'


describe('Check by regex', t => {
  t.regex('https://github.com', regexPattern.url)
  t.regex('https://github.com/tiagoporto', regexPattern.url)
})

describe('Check by method', t => {
  t.true(regexPattern.isUrl('https://github.com'))
  t.true(regexPattern.isUrl('https://github.com/tiagoporto'))
})

