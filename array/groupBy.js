Array.prototype.groupBy = function (callback) {
  const keys = this.map(callback);
  let keyIndex = 0;
  return this.reduce((prev, curr, index, arr) => {
   const key = keys[keyIndex];
    if (!(key in prev) && prev[key] === undefined) {
      prev[key] = [];
    }

    if (curr.type === key) {
      prev[key].push(curr); 
    }

    keyIndex++;
    return prev;
  }, {});
}


const items = [
  { name: "bannas", type: 'fruit' },
  { name: "cow", type: 'animal' },
  { name: "cherriw", type: 'fruit' },
  { name: "dog", type: 'animal' }
];

console.log(items.groupBy(({ type }) => type));
