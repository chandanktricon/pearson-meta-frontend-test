function objMerge(arr) {
  if(!Array.isArray(arr)) return;

  function merge(merged, currentObject) {
    return Object.assign(merged, currentObject);
  }

  return arr.reduce(merge, {});
}

export { objMerge };