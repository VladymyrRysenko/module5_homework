//Задание 5.
//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
var index;
for (index = 0; index <arr.length; ++index) {
  console.log(arr[index]);
}

//вариант 2

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.forEach(function(all){
  console.log(all);
});

