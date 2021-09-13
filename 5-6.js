//Задание 6.
//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

llet myArray = [1, 2, 3, 4, 5, 1];
let isEqual = true;
let reference = myArray[0];
for (let item of myArray){
  if(item !== reference){
    isEqual = false;
  }
}
console.log(isEqual);


//вариант 2
const hasDuplicates = (arr) => arr.length > new Set(arr).size;
console.log(hasDuplicates(arr)); 
