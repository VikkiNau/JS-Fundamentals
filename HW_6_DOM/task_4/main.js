/*
    реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

*/

const subBtn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

const userBlock = document.createElement('ol');
outBlock.appendChild(userBlock);


const fullNameIn = document.querySelector('.arr[name="fio"]');
const phoneIn = document.querySelector('.arr[name="phone"]');
const dateBdIn = document.querySelector('.arr[name="birthday"]');
const emailIn = document.querySelector('.arr[name="email"]');

const users = [];

  class User {
    constructor(fullName, phone, dateBD, email) {
        this.fullName = fullName;
        this.phone = phone;
        this.dateBD = dateBD;
        this.email = email;
    }
}

subBtn.addEventListener("click", (event) => {

    const user = new User(fullNameIn.value, phoneIn.value, dateBdIn.value, emailIn.value);
    if (!isUserExist(user)) {
        users.push(user);
        addUserOutBlock(users);
    }

    cleaner();
    
});

function isUserExist(newUser) {
    for (let existUser of users) {
        if (
            existUser.fullName === newUser.fullName && 
            existUser.phone === newUser.phone && 
            existUser.dateBD === newUser.dateBD && 
            existUser.email === newUser.email
        ) {
            alert(`User with the name ${existUser.fullName} phone ${existUser.phone} birthday ${existUser.dateBD} email ${existUser.email} already exists`)
            return true;
        }
    }
    return false;
}

function addUserOutBlock(users) {
    userBlock.innerHTML = '';
    for(let val of users)
    {
        const userInOutBlock = document.createElement('li');
        userBlock.appendChild(userInOutBlock);
        userInOutBlock.innerHTML += `${val.fullName} ${val.phone} ${val.dateBD} ${val.email}`;
    }
}

function cleaner(){
    fullNameIn.value = '';
    phoneIn.value = '';
    dateBdIn.value = '';
    emailIn.value = '';
}
