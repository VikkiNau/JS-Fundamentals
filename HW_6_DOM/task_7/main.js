const body = document.querySelector('body');
const divClock = document.createElement('div');
body.appendChild(divClock);
divClock.classList = 'clock';
const divData = document.createElement('div');
divClock.appendChild(divData);
const time = document.createElement('div');
divClock.appendChild(time);
const mes = document.createElement('div');
divClock.appendChild(mes)

const dataToday = new Date()
const month = dataToday.getMonth();
let hours = dataToday.getHours();
let minutes = dataToday.getMinutes();
let seconds = dataToday.getSeconds();

function clockTime() {
    const dataToday = new Date()
    const month = dataToday.getMonth();
    let hours = dataToday.getHours();
    let minutes = dataToday.getMinutes();
    let seconds = dataToday.getSeconds();
    message(seconds);
    showMonthName(month);
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
    setTimeout("clockTime()", 1000);
}
clockTime();

function message(seconds){
if(seconds === 59){
    mes.innerHTML = 'LEAP SECOND';
}
else{ mes.innerHTML = '';}
}


function showMonthName(month) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    divData.innerHTML = `${months[month]} ${dataToday.getDate()}`;
}
