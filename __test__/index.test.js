const media = require('../src')
const { sizes } = require('../src')

test('should not empty', () => {
  expect(media).toBeTruthy()
})

describe('media', () => {
  test('export default media should be an object', () => {
    expect(typeof media).toBe('object')
  })

  test('export media devices should be a function', () => {
    expect(typeof media.giant).toBe('function')
    expect(typeof media.desktop).toBe('function')
    expect(typeof media.tablet).toBe('function')
    expect(typeof media.phone).toBe('function')
  })
})

test('export sizes should be an object', () => {
  expect(typeof sizes).toBe('object')
})
