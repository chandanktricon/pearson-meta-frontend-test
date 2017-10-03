function capFirstLetter(string) {
  var strArr = string.split(' ');
  strArr = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  return strArr.join(' ').replace(/\s+/g, " ").trim();
}

export { capFirstLetter };