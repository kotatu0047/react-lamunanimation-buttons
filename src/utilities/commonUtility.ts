export const getRadian = (angle: number) => angle * (Math.PI / 180)

/**
 * @throws Error on illegal arguments
 */
export const range = (begin: number, end: number) => {
  const length = end + 1 - begin
  if (length <= 0 || end < 0 || begin < 0) throw new Error('illegal arguments')

  const result: number[] = []
  // eslint-disable-next-line no-restricted-syntax
  for (const index of Array(length).keys()) {
    result.push(index + begin)
  }

  return result
}
