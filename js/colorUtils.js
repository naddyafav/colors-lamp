function isValidColor(color) {
  if (!color || color.trim() === '') return false;
  const hex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  const named = /^[a-zA-Z]+$/;
  return hex.test(color.trim()) || named.test(color.trim());
}

module.exports = { isValidColor };
