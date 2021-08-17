const arr = [1, 2, 3, 4, 5];

const revertArr = [];

arr.forEach(value => {
  revertArr.unshift(value);
});

console.log('revertArr:', revertArr);