/**
 * Divides the integer in groups of three and adds space between group.
 * Adds space after "-".
 * Example: `-12312.123123` -> `- 12 312.123123`.
 * Made to give the numbers a fancier look.
 *
 * @param {number | string} inputNumber
 * @return {string} The formatted number
 */
export function numberWithDelimeters(inputNumber) {
  let parts = inputNumber.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  parts[0] = parts[0].replace("-", "- ");
  return parts.join(".");
}

// Took here that big complex regular expression
// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
