const hours = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const milisecond = document.querySelector('#milisecond');
const btnStart = document.querySelector('#start-btn');
const btnReset = document.querySelector('#reset-btn');
const logTime = document.querySelector('.log-time');

let currentTime = 0;
let stop = false;

let timer = setInterval(function() {
    if(stop) {
        currentTime += 10;
        let appendMilisecond = parseInt((currentTime % 1000) / 10);
        let appendSecond = Math.floor((currentTime / 1000) % 60);
        let appendMinute = Math.floor((currentTime / (1000 * 60)) % 60);
        let appendHours = Math.floor((currentTime / (1000 * 60 * 60)) % 24);

        appendMilisecond = appendMilisecond < 10 ? '0' + appendMilisecond : appendMilisecond;
        milisecond.innerHTML = appendMilisecond;

        appendSecond = appendSecond < 10 ? '0' + appendSecond : appendSecond;
        second.innerHTML = appendSecond;

        appendMinute = appendMinute < 10 ? '0' + appendMinute : appendMinute;
        minute.innerHTML = appendMinute;

        appendHours = appendHours < 10 ? '0' + appendHours : appendHours;
        hours.innerHTML = appendHours;
    }
}, 10);

btnStart.addEventListener('click', function(e) {
    e.preventDefault();
    if(stop) {
        stop = false;
        btnStart.value = "start";
        console.log(stop);
        logStopTime();
    } else {
        stop = true;
        btnStart.value = "stop";
        console.log(stop);
    }
});


let resetTime = function() {
    hours.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
    milisecond.innerHTML = '00';
}

btnReset.addEventListener('click', resetTime);

let logStopTime = function() {
    console.log(hours.textContent + ':' + minute.textContent + ':' + second.textContent + ':' + milisecond.textContent);
    let contentLogTime = document.createElement('p');
    contentLogTime.innerHTML = hours.textContent + ':' + minute.textContent + ':' + second.textContent + ':' + milisecond.textContent;
    logTime.appendChild(contentLogTime);
    
}

resetTime();
