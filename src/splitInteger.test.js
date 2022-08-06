// eslint-disable-next-line no-unused-vars
const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const expectedResult = splitInteger(8, 2);

  expect(expectedResult).toEqual([4, 4]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const expectedResult = splitInteger(8, 1);

  expect(expectedResult).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const expectedResult = splitInteger(5, 2);

  expect(expectedResult).toEqual([2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  const expectedResult = splitInteger(2, 3);

  expect(expectedResult).toEqual([0, 0, 0]);
});
