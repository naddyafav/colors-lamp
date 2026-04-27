const { isValidColor } = require('../js/colorUtils');

test('valid hex color with #', () => {
  expect(isValidColor('#ff0000')).toBe(true);
});

test('valid hex color without #', () => {
  expect(isValidColor('ff0000')).toBe(true);
});

test('valid named color', () => {
  expect(isValidColor('red')).toBe(true);
});

test('empty string is invalid', () => {
  expect(isValidColor('')).toBe(false);
});

test('random invalid input', () => {
  expect(isValidColor('!!!###')).toBe(false);
});
