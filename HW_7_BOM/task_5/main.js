/*
    Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Приклад роботи:
https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png
*/

const btn = document.querySelector('#btn');


btn.addEventListener('click', function(){
    const mes = document.createElement('p');
    document.body.appendChild(mes);    
    mes.innerText = 'I was pressed!';
});
btn.addEventListener('mouseover', function(){
    const mes = document.createElement('p');
    document.body.appendChild(mes);    
    mes.innerText = 'Mouse on me!';    
});
btn.addEventListener('mouseout', function(){
    const mes = document.createElement('p');
    document.body.appendChild(mes);    
    mes.innerText = 'Mouse is not on me!';    
});