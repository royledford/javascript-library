/**
 * numberWithCommas
 * Convert a number to a string with commas
 *
 * x = number to convert
 *
 * returns: String
 */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
