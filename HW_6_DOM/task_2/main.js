const titleH1 = document.querySelector("h1");
const p = document.querySelector('#myDiv');
const myList = document.querySelector("#myList");
const myListEl = document.querySelectorAll("#myList li");
const span = document.querySelector("span");

const li = document.createElement('li');
myList.appendChild(li);
li.style.listStyleType = 'none';

const firstP = p.children[0];
const secondP = p.children[1];
const thirdP = p.children[2];
const FourthP = p.children[3];

titleH1.style.background = 'lightgreen';
firstP.style.fontWeight = 'bold';
secondP.style.color = 'red';
thirdP.style.textDecoration = 'underline';
FourthP.style.fontStyle = 'italic';


const arrList = [];
for (let v of myListEl)
    arrList.push(v.textContent);
li.innerHTML = arrList.join('');
for (let v of myListEl)
    v.remove()
span.remove();