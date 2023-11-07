/*
    Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
     1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
     2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
     3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
     4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
     Приклад – курсор наведений на лінку.
    https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png
*/
const body = document.querySelector('body');
const btn_1 = document.querySelector('#btn-1');
const btn_2 = document.querySelector('#btn-2');
const btn_3 = document.querySelector('#btn-3');
const link = document.querySelector('#link');

btn_1.addEventListener('click', function(){
    body.style.background = 'blue';
});

btn_2.addEventListener('dblclick', function(){
    body.style.background = 'pink';
});

btn_3.addEventListener('mousedown', function(){
    body.style.background = 'brown';
});

btn_3.addEventListener('mouseup', function(){
    body.style.background = 'white';
});

link.addEventListener('mouseover', function(){
    body.style.background = 'yellow';
});

link.addEventListener('mouseout', function(){
    body.style.background = 'white';
});