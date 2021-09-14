let array = [1, 2, 5, 10, null, 99, 101];
let oddArray = array.filter(array => array % 2 == 0 && array !== null);
let evenArray = array.filter(array => array % 2 !== 0 && array !== null);
let nullArray = array.includes(null);
console.log(oddArray.length + "-кол-во четных");
console.log(evenArray.length + "-кол-во нечетных");
console.log(nullArray)

