
setInterval(setDate, 1000);
setInterval(digitalClock, 1000);
const secondHand = document.querySelector('[data-second-hand]');
const hourHand = document.querySelector('[data-hour-hand]');
const minHand = document.querySelector('[data-min-hand]');
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds() / 60;
    secondHand.style.transform = `rotate(${seconds * 360}deg)`;

    const min = (seconds + now.getMinutes()) / 60;
    minHand.style.transform = `rotate(${min * 360}deg)`;

    const hour = (min + now.getHours()) / 12;
    hourHand.style.transform = `rotate(${hour * 360}deg)`;


}

function digitalClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;


    document.getElementById("digital").innerHTML = hour + "." + minute + "." + second;
}

setDate();
digitalClock();

