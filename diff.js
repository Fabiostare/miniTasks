const diff = function(a1, a2) {
    return a1.filter(i => !a2.includes(i))
    .concat(a2.filter(i => !a1.includes(i)));
}

console.log(diff([1, 2, 4, 6, 7], [1 ,4, 6, 8, 9]));