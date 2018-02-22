// generate a unique-ish string
export const uniqueString = () => {
  return (
    '_' +
    new Date().valueOf() +
    Math.random()
      .toFixed(16)
      .substring(2)
  )
}
