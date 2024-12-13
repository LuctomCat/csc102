// This is the Button that says Hello to Matthew Marquit.

function updateText(){
    document.getElementById("heading").innerHTML = "Hey Marquit.";

}

// This is the Button to Play Craps

function updateCrap(){
    document.getElementById("hooding").innerHTML = Craps();

}

// This is the function for how Craps plays.

function Craps(){

// These are the functions for the dice that are rolled.

    let rand1 = Math.floor(Math.random()*6)+1
    let rand2 = Math.floor(Math.random()*6)+1
    console.log(rand1, rand2)

// This is the function that determines if you have rolled Craps, or if you have won or lost at Craps.

    let sum = rand1 + rand2
    if (sum === 7 || sum === 11) {return "CRAPS - You Lose!"}
    else if (rand1 === rand2 && rand1 % 2 === 0) {return "You Won!! Congration, you done it!"}
    else {return "Womp Womp"}
}