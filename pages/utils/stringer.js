function capFirstLetter(string) {
  var string = deepTrim(string);
  var strArr = string.split(' ');
  strArr = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  return strArr.join(' ');
}

function deepTrim(string) {
  return string.replace(/\s+/g, " ").trim();
}

export { capFirstLetter, deepTrim };