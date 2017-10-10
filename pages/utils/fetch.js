function get(url, callback ) {
  fetch(url)
  .then(res => res.json())
  .then(callback)
  .catch(e => console.log(e));
}

function post(url, data, callback) {
  fetch(url, {method: 'POST'})
  .then(res => res.json())
  .then(callback)
  .catch(e => console.log(e));
}

export default { get, post };