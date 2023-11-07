/*
    Для заданої HTML-сторінки:
<p id ='text'>I learning JavaScript events!</p> 
<div>
        <button . . . . . >Change style!</button>
</div>

напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і 
змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, 
шрифт сімейства "Comic Sans MS".
*/

const par = document.querySelector('p');

function changeCSS(){
    par.style.color = 'orange';
    par.style.fontSize = '20px';
    par.style.fontFamily = 'Comic Sans MS';
}
