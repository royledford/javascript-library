export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Get a cartesion coordinate for a point on an arc
// From opsb answer on StackOverflow https://stackoverflow.com/a/18473154/208079
export const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}
