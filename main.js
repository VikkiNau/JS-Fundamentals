/*1. ++++++++++++++
Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
початкове значення
кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями) 
*/

let arr = createArray(2, 9);
//console.log(arr); // [2,3,4,5,6,7,8,9]
function createArray(start, end) {
  let arrayNew = [];
  for (let i = start; i <= end; i++) {
    arrayNew.push(i);
  };
  return arrayNew;
}

/* 2. ++++++++++++++
Задані цілі числа a і b (a < b). 
Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
*/

function createSequence(start, end) {
  let count = 1;
  for (let i = start; i <= end; i++) {
    for (let j = 0; j < count; j++)
      console.log(i);
    count++;
  };
}

//createSequence(3, 5);

/* 3.  ++++++++++++++++++
Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
*/
function randArray(lenghtArray) {
  let arr = [];
  for (let i = 0; i < lenghtArray; i++) {
    arr.push(Math.floor(Math.random() * 501));
  }
  return arr;
}
//console.log(randArray(5));  // [399,310,232,379,40]

/* 4. +++++++++++++++++
Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]
*/
function compact(arr) { return [...new Set(arr)]; }
//console.log(compact([5, 3, 4, 5, 6, 7, 3]))



/* 5+++++++++++++++
Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/


let arrNumber = [];
let arrString = [];

function newArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray(arr[i]);
    } else {
      if (typeof arr[i] === 'string') arrString.push(arr[i]);
      else arrNumber.push(arr[i])
    }
  };
  return ([arrNumber, arrString])
}

//console.log(newArray([5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"]));


/* 6. +++++++++++++
Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. 
Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
calc(10, 3, 1); // => 7
*/
function calc(a, b, op) {
  switch (op) {
    case 1:
      return (`${a} - ${b} = ${a - b}`);
    case 2:
      return (`${a} * ${b} = ${a * b}`);
    case 3:
      return (`${a} / ${b} = ${a / b}`);
    default:
      return (`${a} + ${b} = ${a + b}`);
  }
}
//console.log(calc(10, 3, 1));

/* 7. +++++++++++++++++
Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/
function findUnique(arr) {
  return arr.length === [...new Set(arr)].length;
}
//console.log(findUnique([1, 2, 3, 5, 3]));
//console.log (findUnique([1, 2, 3, 5, 11]));

/* 8.  +++++++
Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, 
яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.  (потребує використання closure)
const tom = create("pass_for_Tom");
tom("pass_for_Tom"); //повертає true 
tom("pass_for_tom"); //повертає false
*/

function create(str) {
  return ((otherStr) => str === otherStr);
}

const tom = create("pass_for_Tom");
//tom("pass_for_Tom"); //повертає true 
//tom("pass_for_tom"); // false
//console.log(tom("pass_for_Tom"));
//console.log(tom("pass_for_tom"));