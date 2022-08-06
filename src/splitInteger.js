/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const parts = [];
  let rest = value;

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);

    parts.push(value < numberOfParts ? 0 : part);
    rest -= part;
  }

  return Number.isInteger(value / numberOfParts) ? parts : parts.sort((a, b) => a - b);
}

module.exports = splitInteger;
