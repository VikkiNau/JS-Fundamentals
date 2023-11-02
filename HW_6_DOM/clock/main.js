/* 
    електронний годинник за посиланням: 
    https://user-images.githubusercontent.com/9075641/182206079-7c4aa5f0-50d9-4808-bec7-6d3af7bdada9.gif
*/

const body = document.querySelector('body');
body.style.background = 'black';
const divStyle = document.createElement('div');
body.appendChild(divStyle);
divStyle.style.margin = 'auto';
divStyle.classList.add('divStyle');

const clockStyle = document.createElement('div');
divStyle.appendChild(clockStyle);
clockStyle.classList.add('clock-styles');
const clock = document.createElement('div');
clockStyle.appendChild(clock);
clock.id = 'clock';
const spanFirst = document.createElement('span');
divStyle.appendChild(spanFirst);
const spanLast = document.createElement('span');
divStyle.appendChild(spanLast);






function clockTime() {
	const dataToday = new Date()
	let hours = dataToday.getHours();
	let minutes = dataToday.getMinutes();
	let seconds = dataToday.getSeconds();

	if (minutes <= 9) {
		minutes = "0" + minutes;
	}
	if (seconds <= 9) {
		seconds = "0" + seconds;
	}
	clock.innerHTML = `${hours}:${minutes}:${seconds}`
	setTimeout("clockTime()", 1000);
}
clockTime();