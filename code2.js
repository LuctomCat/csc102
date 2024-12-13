// Play the background audio on loop
const backgroundAudio = document.getElementById("backgroundAudio");
const eventAudio = document.getElementById("eventAudio");
backgroundAudio.src = "Man Down.mp3"
backgroundAudio.play();

// This is the Button that says Hello to Matthew Marquit.
function updateText() {
    document.getElementById("heading").innerHTML = "Hey Marquit.";

    // Marquit Music Swap
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
    eventAudio.src = "Wholesome.mp3";
    eventAudio.play();
}

// Button to play Craps
function updateCrap() {
    document.getElementById("hooding").innerHTML = Craps();
}

// These are the functions for the dice that are rolled.
function Craps() {
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;
    console.log(rand1, rand2);

    // Determine result
    let sum = rand1 + rand2;
    if (sum === 7 || sum === 11) {
        playEventAudio("life-is-pain-i-hate.mp3");
        return "CRAPS - You Lose!";
    } else if (rand1 === rand2 && rand1 % 2 === 0) {
        return "You Won!! Congration, you done it!";
    } else {
        return "Womp Womp";
    }
}

// play event audio
function playEventAudio(file) {
    eventAudio.src = file;
    eventAudio.play();
}
