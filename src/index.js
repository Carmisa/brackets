module.exports = function check(str, bracketsConfig) {
  let pairs = [];
  for (item of bracketsConfig) {
    pairs.push(item[0] + item[1]);
  }
  while (pairs.some(val => str.includes(val))) {
    for (item of pairs) {
      str = str.replace(item, '');
    }
  }
  return !Boolean(str);
}
