const show = document.querySelector('show');

const kitchen = document.querySelector('#kitchen');
const bedroom = document.querySelector('.bedroom');
const bathroom = document.querySelector('.bathroom');
const office = document.querySelector('.office');
const tv_room = document.querySelector('.tv_room');
const livingroom = document.querySelector('.livingroom');
const terrace = document.querySelector('.terrace');
const garden = document.querySelector('.garden');
const toilet = document.querySelector('.toilet');

const showWindow = document.querySelector('.showWindow');

const btnLight = document.querySelector('.btnLight');
const btnHeating = document.querySelector('.btnHeating');
const btnCoffeeMachine = document.querySelector('.btnCoffeeMachine');
const water = document.querySelector('.water');
const light = document.querySelector('.light');
const heating = document.querySelector('.heating');
const airCond = document.querySelector('.airCond');
const btnWater = document.querySelector('.btnWater');
const tv = document.querySelector('.tv');
const btnTv = document.querySelector('.btnTv');
const coffeeMachine = document.querySelector('.coffeeMachine');


const showData = document.querySelector('.data');
const showTime = document.querySelector('.time');
const nameRoom = document.querySelector('.nameRoom');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const airCondTemp = document.querySelector('.airCondTemp');
const channels = document.querySelector('.channels');
const btnNetflix = document.querySelector('.btnNetflix');
const btnYoutube = document.querySelector('.btnYouTube');
const btnMegogo = document.querySelector('.btnMegogo');



const btnLogin = document.getElementById('login');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementsByClassName('close')[0];
const submitBtn = document.getElementById('submitBtn');

btnLogin.onclick = function () {
   modal.style.display = 'block';
}

closeModalBtn.onclick = function () {
   modal.style.display = 'none';
}

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = 'none';
   }
}
submitBtn.onclick = function () {
   let inputValue = document.getElementById('inputField').value;
   let inputPassword = document.getElementById('password').value;
   document.querySelector('.userInHouse').innerHTML = inputValue;
   modal.style.display = 'none';
}




let colorsBtn = ['yellow', 'green'];


function saveColorToLocalStorage(key, colorIndex) {
   localStorage.setItem(key, colorIndex);
}

function getColorIndexFromLocalStorage(key) {
   return localStorage.getItem(key);
}




let currentColorIndexBtnAlarm = getColorIndexFromLocalStorage('currentColorIndexBtnAlarm');
alarm.style.backgroundColor = colorsBtn[currentColorIndexBtnAlarm];
alarm.addEventListener('click', function () {
   currentColorIndexBtnAlarm = (currentColorIndexBtnAlarm + 1) % colorsBtn.length;
   alarm.style.backgroundColor = colorsBtn[currentColorIndexBtnAlarm];
   saveColorToLocalStorage('currentColorIndexBtnAlarm', currentColorIndexBtnAlarm);
});


let currentColorIndexBtnDoor = getColorIndexFromLocalStorage('currentColorIndexBtnDoor');
door.style.backgroundColor = colorsBtn[currentColorIndexBtnDoor];
door.addEventListener('click', function () {
   currentColorIndexBtnDoor = (currentColorIndexBtnDoor + 1) % colorsBtn.length;
   door.style.backgroundColor = colorsBtn[currentColorIndexBtnDoor];
   saveColorToLocalStorage('currentColorIndexBtnDoor', currentColorIndexBtnDoor);
});

let dataToday = new Date()
let month = dataToday.getMonth();

function clockTime() {
   let dataToday = new Date()
   let hours = dataToday.getHours();
   let minutes = dataToday.getMinutes();
   let seconds = dataToday.getSeconds();
   if (minutes <= 9) {
      minutes = "0" + minutes;
   }
   if (seconds <= 9) {
      seconds = "0" + seconds;
   }
   showTime.innerHTML = `${hours}:${minutes}:${seconds}`;
   setTimeout("clockTime()", 1000);
}
clockTime();


showMonthName(month)
function showMonthName(month) {
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   showData.innerHTML = `${months[month]} ${dataToday.getDate()} ${dataToday.getFullYear()}`;
}


const weather = document.querySelector('.weather')
async function temperatureOut() {
   const respons = await fetch(` https://api.open-meteo.com/v1/forecast?latitude=49.8383&longitude=24.0232&hourly=temperature_2m&current_weather=true`);
   const current_temperature = await respons.json();
   let weathercode = current_temperature.current_weather.weathercode;

   if (weathercode >= 40 && weathercode <= 49)
      weather.innerHTML = `${Math.round(current_temperature.current_weather.temperature)}°C Fog`;
   if (weathercode >= 50 && weathercode <= 59)
      weather.innerHTML = `${Math.round(current_temperature.current_weather.temperature)}°C Drizzle`;
   if (weathercode >= 60 && weathercode <= 69)
      weather.innerHTML = `${Math.round(current_temperature.current_weather.temperature)}°C Rain`;
   if (weathercode >= 90 && weathercode <= 99)
      weather.innerHTML = `${Math.round(current_temperature.current_weather.temperature)}°C Thunderstorm`;
   else {
      weather.innerHTML = `${Math.round(current_temperature.current_weather.temperature)}°C`;
   }
};

temperatureOut();

let rooms = loadOrInitRooms();
let currentRoom = null;


let currentStatusIndexLight;
let currentColorIndexBtnLight;

let currentColorIndexBtnHeating;
let currentStatusIndexHeating;

let currentColorIndexBtnCoffeeMachine;
let currentStatusIndexCoffeeMachine;

let currentColorIndexBtnWater;
let currentStatusIndexWater;

let currentColorIndexBtnTV;
let currentStatusIndexTV;

function displayLightControls(isOn) {
   btnLight.value = isOn ? 'On' : 'Off';
   btnLight.style.backgroundColor = isOn ? 'yellow' : 'gray';
}

btnLight.addEventListener('click', function () {
   currentRoom.light = !currentRoom.light;
   saveRooms(rooms);
   displayLightControls(currentRoom.light);
});

function displayHeatingControls(isOn) {
   btnHeating.value = isOn ? 'On' : 'Off';
   btnHeating.style.backgroundColor = isOn ? 'yellow' : 'gray';
}

btnHeating.addEventListener('click', function () {
   currentRoom.heating = !currentRoom.heating;
   saveRooms(rooms);
   displayHeatingControls(currentRoom.heating);
});

function displayCoffeeMachineControls(isOn) {
   btnCoffeeMachine.value = isOn ? 'On' : 'Off';
   btnCoffeeMachine.style.backgroundColor = isOn ? 'yellow' : 'gray';
}
btnCoffeeMachine.addEventListener('click', function () {
   currentRoom.coffeeMachine = !currentRoom.coffeeMachine;
   saveRooms(rooms);
   displayCoffeeMachineControls(currentRoom.coffeeMachine);
});

function displayWaterControls(isOn) {
   btnWater.value = isOn ? 'On' : 'Off';
   btnWater.style.backgroundColor = isOn ? 'yellow' : 'gray';
}
btnWater.addEventListener('click', function () {
   currentRoom.water = !currentRoom.water;
   saveRooms(rooms);
   displayWaterControls(currentRoom.water);
});

function displayTvControls(isOn) {
   btnTv.value = isOn ? 'On' : 'Off';
   btnTv.style.backgroundColor = isOn ? 'yellow' : 'gray';
   if (isOn === true) {
      channels.style.display = 'unset';
      btnNetflix.style.display = 'unset';
      btnYoutube.style.display = 'unset';
      btnMegogo.style.display = 'unset';

   }
   if (isOn === false) {
      channels.style.display = 'none';
      btnNetflix.style.display = 'none';
      btnYoutube.style.display = 'none';
      btnMegogo.style.display = 'none';
   }
}
btnTv.addEventListener('click', function () {
   currentRoom.tv = !currentRoom.tv;
   saveRooms(rooms);
   displayTvControls(currentRoom.tv);

});

btnNetflix.addEventListener('click', function () {
   currentRoom.tvChannels = 'netflix';
   btnNetflix.style.backgroundColor = 'yellow';
   btnYoutube.style.backgroundColor = 'gray';
   btnMegogo.style.backgroundColor = 'gray';
   saveRooms(rooms);

});

btnYoutube.addEventListener('click', function () {
   currentRoom.tvChannels = 'youtube';
   btnYoutube.style.backgroundColor = 'yellow';
   btnNetflix.style.backgroundColor = 'gray';
   btnMegogo.style.backgroundColor = 'gray';
   saveRooms(rooms);
});

btnMegogo.addEventListener('click', function () {
   currentRoom.tvChannels = 'megogo';
   btnMegogo.style.backgroundColor = 'yellow';
   btnNetflix.style.backgroundColor = 'gray';
   btnYoutube.style.backgroundColor = 'gray';
   saveRooms(rooms);
});

minus.addEventListener('click', function () {
   airCondTemp.innerHTML = parseInt(airCondTemp.textContent) - 1;
   currentRoom.airCondition = parseInt(airCondTemp.textContent);
   saveRooms(rooms)
})
plus.addEventListener('click', function () {
   airCondTemp.innerHTML = parseInt(airCondTemp.textContent) + 1;
   currentRoom.airCondition = parseInt(airCondTemp.textContent)
   saveRooms(rooms)
})

function showRoom(roomName) {
   let allElements = document.querySelectorAll('.showWindow > div');
   allElements.forEach(element => {
      element.style.display = 'none';
   });

   nameRoom.innerHTML = roomName.charAt(0).toUpperCase() + roomName.slice(1);

   currentRoom = null;
   for (let roomItem of rooms) {
      if (roomItem.name === roomName) {
         for (let key of Object.keys(roomItem)) {
            if (key !== 'name' && roomItem[key]) {
               if (key === 'airCondition') {
                  let element = document.querySelector(`[data-name="${key}"]`);
                  airCondTemp.innerHTML = roomItem[key];
               }
               let elements = document.querySelectorAll(`[data-name="${key}"]`);
               elements.forEach(element => {
                  element.style.display = 'flex';
               });
            }
         }

         currentRoom = roomItem;
         break;
      }
   }

   if (currentRoom) {
      if (currentRoom.hasOwnProperty('light')) {
         let elements = document.querySelectorAll(`[data-name="light"]`);
         elements.forEach(element => {
            element.style.display = 'flex';
         });
         displayLightControls(currentRoom.light);
      }
      if (currentRoom.hasOwnProperty('heating')) {
         let elements = document.querySelectorAll(`[data-name="heating"]`);
         elements.forEach(element => {
            element.style.display = 'flex';
         });
         displayHeatingControls(currentRoom.heating);
      }
      if (currentRoom.hasOwnProperty('coffeeMachine')) {
         let elements = document.querySelectorAll(`[data-name="coffeeMachine"]`);
         elements.forEach(element => {
            element.style.display = 'flex';
         });
         displayCoffeeMachineControls(currentRoom.coffeeMachine);
      }
      if (currentRoom.hasOwnProperty('water')) {
         let elements = document.querySelectorAll(`[data-name="water"]`);
         elements.forEach(element => {
            element.style.display = 'flex';
         });
         displayWaterControls(currentRoom.water);
      }
      if (currentRoom.hasOwnProperty('tv')) {
         let elements = document.querySelectorAll(`[data-name="tv"]`);
         elements.forEach(element => {
            element.style.display = 'flex';
         });
         displayTvControls(currentRoom.tv);
      }
      if (currentRoom.tvChannels === 'netflix') {
         btnNetflix.style.backgroundColor = 'yellow';
         btnYoutube.style.backgroundColor = 'gray';
         btnMegogo.style.backgroundColor = 'gray';
      }
      if (currentRoom.tvChannels === 'youtube') {
         btnYoutube.style.backgroundColor = 'yellow';
         btnNetflix.style.backgroundColor = 'gray';
         btnMegogo.style.backgroundColor = 'gray';
      }
      if (currentRoom.tvChannels === 'megogo') {
         btnMegogo.style.backgroundColor = 'yellow';
         btnNetflix.style.backgroundColor = 'gray';
         btnYoutube.style.backgroundColor = 'gray';
      }



      airCondTemp.innerHTML = currentRoom.airCondition;


   }

}

function saveRooms(rooms) {
   let key = 'rooms';
   localStorage.setItem(key, JSON.stringify(rooms));
}

function loadOrInitRooms() {
   let key = 'rooms'
   const value = localStorage.getItem(key);
   if (value) {
      return JSON.parse(value);
   };

   let rooms = [{
      name: 'kitchen',
      light: false,
      heating: false,
      airCondition: 22,
      coffeeMachine: false,
   },
   {
      name: 'bedroom',
      light: false,
      heating: false,
      airCondition: 22,
   },
   {
      name: 'bathroom',
      light: false,
      heating: false,
      airCondition: 22,
      water: false,
   },
   {
      name: 'office',
      light: false,
      heating: false,
      airCondition: 22,
   },
   {
      name: 'tv_room',
      light: false,
      heating: false,
      airCondition: 22,
      tv: false,
      tvChannels: 'netflix',
   },
   {
      name: 'livingroom',
      light: false,
      heating: false,
      airCondition: 22,
   },
   {
      name: 'terrace',
      light: false,
      heating: false,
   },
   {
      name: 'garden',
      light: false,
      heating: false,
   },
   {
      name: 'toilet',
      light: false,
      heating: false,
      airCondition: 22,
   }];

   return rooms;
}

function getRoomFromLocalStorage(key) {
   const value = localStorage.getItem(key);
   return value ? JSON.parse(value) : null;
}


lightHouse.addEventListener('click', function () {
   for (let item of rooms) {
      item.light = false;
      saveRooms(rooms);
      displayLightControls();
   }
})




home.addEventListener('click', function () {
   nameRoom.style.display = 'none';
   btnLight.style.display = 'none';
   light.style.display = 'none';
   btnHeating.style.display = 'none';
   heating.style.display = 'none';
   airCond.style.display = 'none';
   coffeeMachine.style.display = 'none';
   btnCoffeeMachine.style.display = 'none';
   btnWater.style.display = 'none';
   water.style.display = 'none';
   btnTv.style.display = 'none';
   tv.style.display = 'none';
   channels.style.display = 'none';
   btnNetflix.style.display = 'none';
   btnYoutube.style.display = 'none';
   btnMegogo.style.display = 'none';
})