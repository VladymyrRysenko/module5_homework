//Задание 2.
//Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
//Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let x = true;
if (typeof x == "number") {
  console.log("X — число")
} else if (typeof x == "string") {
  console.log("X — строка")
} else if (typeof x == "boolean") {
  console.log("X — логический тип")
} else 
  console.log("тип X — не определён")
 
//вариант 2
  
  let x = 5;
switch (typeof x) {
  case 'number':
    console.log('x - число');
    break;
  case 'string':
    console.log('x - строка');
    break;
  case 'boolean':
    console.log('x - булево значение');
    break;
  default: 
    console.log('Тип x не определен');
}

