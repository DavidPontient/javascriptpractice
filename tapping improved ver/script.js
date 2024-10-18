let count = 0;
let time = 10;
let timer;
let timerStarted = false;  // Flag to prevent multiple timers

// Function to count clicks
function tap() {
    // Increment the click count
    document.getElementById("click").innerText = ++count;

    // Start the timer on the first click
    if (!timerStarted) {
        timerStarted = true;//We want to ensure that the timer starts only once, so we use a flag to keep track of whether the timer has started or not.
        timer = setInterval(() => {
            time--;
            document.getElementById("time").innerText = time;

            // Stop the timer when time runs out
            if (time === 0) {
                clearInterval(timer);
                // document.getElementById("tapButton").disabled = true;  // Disable the tap button
                alert("Time's up! You got: "+count+" clicks in 10 seconds.");
            }
        }, 1000);  // Decreases time every second
    }
}
