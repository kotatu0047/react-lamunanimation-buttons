import { getRadian, range } from './commonUtility'

describe('getRadian', () => {
  test('get radian by angel', () => {
    const result = getRadian(180)

    expect(result).toBe(180 * (Math.PI / 180))
  })

  test('get 0 on pass angle:0', () => {
    const result = getRadian(0)

    expect(result).toBe(0)
  })
})

describe('range', () => {
  test('get range 0-0', () => {
    const result = range(0, 0)
    console.log(result)

    expect(result).toStrictEqual([0])
  })

  test('get range 0-1', () => {
    const result = range(0, 1)

    expect(result).toStrictEqual([0, 1])
  })

  test('get range 0-10', () => {
    const result = range(0, 10)

    expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  test('get range 5-10', () => {
    const result = range(5, 10)

    expect(result).toStrictEqual([5, 6, 7, 8, 9, 10])
  })

  test('get range 10-10', () => {
    const result = range(10, 10)

    expect(result).toStrictEqual([10])
  })

  test('throw error on 11-10', () => {
    expect(() => range(11, 10)).toThrowError(Error)
  })

  test('throw error on 0-(-1))', () => {
    expect(() => range(0, -1)).toThrowError(Error)
  })

  test('throw error on (-1)-0', () => {
    expect(() => range(-1, 0)).toThrowError(Error)
  })
})
