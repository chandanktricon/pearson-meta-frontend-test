const ids = [];
let usedIds = [];

for (let i = 0; i <= 40; i++) {
  ids.push(i);
}

function getId() {
  if(!ids.length) return null;

  let index = Math.floor(Math.random() * ids.length);
  let id = ids[index];
  usedIds.push(id);
  ids.splice(index, 1);
  // console.log('id: ' + id);
  // console.log('actual ids: ' + ids);
  // console.log('used ids: ' + usedIds);
  return id;
}

export { getId };