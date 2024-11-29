// Play the background audio on loop
const backgroundAudio = document.getElementById("backgroundAudio");
const eventAudio = document.getElementById("eventAudio");
const diceHistory = document.getElementById("diceHistory");
backgroundAudio.src = "Man Down.mp3";
backgroundAudio.play();

// Function to toggle the background color of the page
function toggleBackground() {
    // Select the body element
    const body = document.body;

    // Check and toggle between two background colors
    if (body.style.backgroundColor === "lightblue") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "lightblue";
    }
}

// This is the Button that says Hello to Matthew Marquit.
function updateText() {
    document.getElementById("heading").innerHTML = "Hey Marquit.";

    // Marquit Music Swap
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
    eventAudio.src = "Wholesome.mp3";
    eventAudio.play();
}

// Function to play Craps
function updateCrap() {
    document.getElementById("hooding").innerHTML = Craps();
}

// Function for the dice roll game
function Craps() {
    let rand1 = Math.floor(Math.random() * 6) + 1; // Dice 1
    let rand2 = Math.floor(Math.random() * 6) + 1; // Dice 2

    // Log the roll to history
    addRollToHistory(rand1, rand2);

    // Determine the result
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

// Function to add a dice roll to history
function addRollToHistory(dice1, dice2) {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = `Dice 1: ${dice1}, Dice 2: ${dice2}`;
    diceHistory.appendChild(listItem);

    // Keep the history at max 5 items
    if (diceHistory.children.length > 5) {
        diceHistory.removeChild(diceHistory.firstChild);
    }
}

// Function to validate user name input and provide a greeting
function validateName() {
    // Get the user's name
    const userName = document.getElementById("userName").value.trim();
    const greeting = document.getElementById("greeting");

    // Check if the name is valid (non-empty and alphabetic)
    if (!userName || !/^[a-zA-Z]+$/.test(userName)) {
        greeting.textContent = "Please enter a valid name.";
    } else {
        greeting.textContent = `Hello, ${userName}! Welcome to the page.`;
    }
}

// Function to play event audio
function playEventAudio(file) {
    eventAudio.src = file;
    eventAudio.play();
}
