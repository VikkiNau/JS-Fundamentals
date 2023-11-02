/*
<body>
  <main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body>
*/

const body = document.querySelector('body');

const main = document.createElement('main');
body.appendChild(main);
main.classList.add('mainClass', 'check', 'item');

const div = document.createElement('div');
main.appendChild(div);
div.setAttribute('id', 'myDiv');

const par = document.createElement ('p');
div.appendChild(par);
par.innerText = 'First paragraph';