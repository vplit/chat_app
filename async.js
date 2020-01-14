let sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject('Input must be number.');
      }
      return resolve(a + b);
    }, 1000);
  });
};

let total = async () => {
  let result = await sum(5, 'a5');
  console.log(result);
};

total();
