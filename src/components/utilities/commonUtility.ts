// TODO testing

export const getRadian = (angle: number) => angle * (Math.PI / 180)

/**
 * @throws Error
 */
export const range = (begin: number, end: number) => {
  const length = end + 1 - begin
  if (length < 0) throw new Error('illegal arguments')

  return [...Array(length)].map((_, i) => i + begin)
}
