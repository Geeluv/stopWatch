// Select all time frames
const hour = document.querySelector(".hour-container h2");
const minute = document.querySelector(".minute-container h2");
const second = document.querySelector(".seconds-container h2");
const milliSecond = document.querySelector(".milliseconds-container h2");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
let hr = 0;
let min = 0;
let sec = 0;
let milli = 0;
let Interval;


const startTimer = () => {
    milli++;
    if (milli <= 9) {
        milliSecond.innerHTML = "0" + milli;
    }
    if (milli > 9) {
        milliSecond.innerHTML = milli;
    }
    if (milli > 99) {
        sec++;
        second.innerHTML = "0" + sec;
        milli = 0;
        milliSecond.innerHTML = "0" + 0;
    }
    if (sec > 9) {
        second.innerHTML = sec;
    }
    if (sec > 13) {
        min++;
        minute.innerHTML = "0" + min;
        sec = 0;
        second.innerHTML = "0" + 0;
    }
    if (min > 9) {
        min.innerHTML = min;
    }
    if (min > 59) {
        hr++;
        hour.innerHTML = "0" + hr;
        min = 0;
        minute.innerHTML = "0" + 0;
    }
    if (hr > 9) {
        hour.innerHTML = hr;
    }
    if (hr > 23) {
        clearInterval(Interval);
    }
}

start.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
});

reset.addEventListener("click", () => {
    milli = "00";
    sec = "00";
    min = "00";
    hr = "00";
    milliSecond.innerHTML = milli;
    second.innerHTML = sec;
    minute.innerHTML = min;
    hour.innerHTML = hr;
})

stop.addEventListener("click", () => {
    console.log("Timer Stopped");
    clearInterval(Interval);
})