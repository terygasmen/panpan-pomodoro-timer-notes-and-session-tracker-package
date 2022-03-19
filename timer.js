// use clear names so someone else can read your code
const numbers = document.querySelectorAll('.numbers');
const tickAudio = new Audio('https://freesound.org/data/previews/254/254316_4062622-lq.mp3');

// State
const currentState = document.querySelector('#state');
const states = ['Focus', 'Break']

// BUTTONS
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
// var is old and should only be used to declare a variable globally, use let or const
//FOCUS TIMER
const focusMinutes = document.querySelector('#focus_mins');
const focusSeconds = document.querySelector('#focus_secs');
//BREAK TIMER
const breakMinutes = document.querySelector('#break_mins');
const breakSeconds = document.querySelector('#break_secs');
// keep all the elements at the top if possile
const pomodoro = document.querySelector('#counter');
//REFERENCE TO A TIMER VARIABLE
let startTimer, 
focusMinTime = 0, 
focusSecTime = 0, 
breakMinTime = 0, 
breakSecTime = 0;
// reset values
const focusTime = 25; //change this values if you want to test
const breakTime = 5;
const resetSeconds = 0;
// number length; 2 = 01; 3 = 001; etc...
const padNumber = 2;

window.addEventListener('load', () => {
    // setting the initial values
    focusMinTime = focusTime;
    focusSecTime = resetSeconds;
    breakMinTime = breakTime;
    breakSecTime = resetSeconds;
});

//START TIMER FUNCTION CALLER
startButton.addEventListener('click', () => {
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000);
    } else {
        alert("Timer is already running.");
    }
});

// TODO: fix the reset and stop

//RESET START TIMER FUNCTION CALLER
resetButton.addEventListener('click', () => {
    // Hide the break timer while focus timer is active
    $( "#fcsTmr" ).removeClass( "hideTimer" );
    $( "#brkTmr" ).addClass( "hideTimer" );

    // moved all the code inside a fucntion so we can reuse it in both, the reset button and when the counter goes to 0
    resetTime();

    // get all the checkboxes
    const tasks = pomodoro.querySelectorAll('#task_complete');
    // loop through them
    for (let i = 0; i < tasks.length; i++) {
        // remove the checkboxes
        pomodoro.removeChild(tasks[i]);
    }

    stopInterval();
    startTimer = undefined;
});

//RESET STOP TIMER FUNCTION CALLER
stopButton.addEventListener('click', () => {
    stopInterval();
    startTimer = undefined;
});


//START TIMER FUNCTION
function timer(){

    // Hide break timer while focus timer is active
    $( "#fcsTmr" ).removeClass( "hideTimer" );
    $( "#brkTmr" ).addClass( "hideTimer" );

    // there is no need to update the text inside the if statement
    // checking if the time is greater than 0 to avoid negative numbers, better than != 0;
    if(focusSecTime > 0){
        focusSecTime--;
    }
    // we already checked if the seconds are more than 0 so no need to do it again
    else if(focusMinTime > 0){
        focusSecTime = 59;
        focusMinTime--;
    }
    // set the correct state
    currentState.innerHTML = states[0]; //Focus
    // get the focusMinutes text - convert focusMiTime to a string - add a 0 at the beginning if it's not as long as padNumber
    focusMinutes.innerText = (focusMinTime.toString()).padStart(padNumber, '0');
    focusSeconds.innerText = (focusSecTime.toString()).padStart(padNumber, '0');

    //Break Timer Countdown
    if(focusMinTime == 0 && focusSecTime == 0){
        $( "#fcsTmr" ).addClass( "hideTimer" );
        $( "#brkTmr" ).removeClass( "hideTimer" );
        // same explaination as the start timer
        if(breakSecTime > 0){
            breakSecTime--;
        } else if(breakMinTime > 0){
            breakSecTime = 59;
            breakMinTime--;
        }
        // set the correct state
        currentState.innerHTML = states[1]; //Break
        breakMinutes.innerText = (breakMinTime.toString()).padStart(padNumber, '0');
        breakSeconds.innerText = (breakSecTime.toString()).padStart(padNumber, '0');
    }
    
    //Increment Pomodors by one if one full cycle is completed
    if (focusMinTime == 0 && focusSecTime == 0 && breakMinTime == 0 && breakSecTime == 0){
        // Reset timer
        resetTime();

        // innerHTML is very dangerous and should never be used, it's a gate for people to input code and hack your website
        // pomodoro.innerHTML += "<input type='checkbox'>";
        // instead create the element
        const checkbox = document.createElement('input');
        // gave it an id so I can reference it later and remove it from the list
        checkbox.id = 'task_complete';
        // set it's type
        checkbox.type = 'checkbox';
        // and add it to the parent element
        pomodoro.appendChild(checkbox);

        $( "#fcsTmr" ).removeClass( "hideTimer" );
        $( "#brkTmr" ).addClass( "hideTimer" );
    }
}

// moved everything in a new function to be reused
function resetTime(){
    focusMinTime = focusTime;
    focusSecTime = resetSeconds;
    focusMinutes.innerText = (focusMinTime.toString()).padStart(padNumber, '0');
    focusSeconds.innerText = (focusSecTime.toString()).padStart(padNumber, '0');
    breakMinTime = breakTime;
    focusSecTime = resetSeconds;
    breakMinutes.innerText = (breakMinTime.toString()).padStart(padNumber, '0');
    breakSeconds.innerText = (breakSecTime.toString()).padStart(padNumber, '0');
}

//STOP TIMER FUNCTION
function stopInterval(){
    clearInterval(startTimer);
}
