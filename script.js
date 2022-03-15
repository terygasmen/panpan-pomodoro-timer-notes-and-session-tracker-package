// BUTTONS
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

// FOCUS MINUTES AND SECONDS
var fm = document.getElementById('focus_mins');
var fs = document.getElementById('focus_secs');

// BREAK MINUTES AND SECONDS
var bm = document.getElementById('break_mins');
var bs = document.getElementById('break_secs');

//store a reference to a timer variable
var startTimer;

// START TIMER FUNCTION CALL
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } 
    else {
        alert("Timer is already running");
    }
})


// RESET TIMER FUNCTION CALL
reset.addEventListener('click', function(){
    fm.innerText = 25;
    fs.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

//STOP TIMER FUNCTION CALL
stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


// START TIMER FUNCTION
function timer(){

    //Work Timer Countdown
    if(fs.innerText != 0){
        fs.innerText--;
    } else if(fm.innerText != 0 && fs.innerText == 0){
        fs.innerText = 59;
        fm.innerText--;
    }

    //Break Timer Countdown
    if(fm.innerText == 0 && fs.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(fm.innerText == 0 && fs.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        fm.innerText = 25;
        fs.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

// STOP TIMER FUNCTION
function stopInterval(){
    clearInterval(startTimer);
}