import { Dice } from "./dice.js";

window.onload = () => {
    // Adds click event listeners to buttons.
        // Note: need to change onclick html attributes to id's for each buttonbefore doing this.
    document.getElementById("alertMessage").addEventListener('click', giveMessage);

    document.getElementById("makeUpper").addEventListener('click', makeUpper);
    document.getElementById("makeLower").addEventListener('click', makeLower);
    document.getElementById("getStringLength").addEventListener('click', stringLength);
    document.getElementById("clearInput").addEventListener('click', clearInput);

    document.getElementById("decreaseArray").addEventListener('click', decreaseArray);
    document.getElementById("increaseArray").addEventListener('click', increaseArray);
    document.getElementById("reverseArray").addEventListener('click', reverseArray);
    document.getElementById("shuffleArray").addEventListener('click', shuffleArray);
    document.getElementById("sortArray").addEventListener('click', sortArray);
    document.getElementById("sumArrayContents").addEventListener('click', sumArrayContents);

    document.getElementById("displayDateTime").addEventListener('click', displayDateTime);
    document.getElementById("rollDiceSix").addEventListener('click', rollDiceSix);
}

function giveMessage() {
    window.alert("Test alert!");
}

// Card 2: Text Manipulation
const cardTwoSource = document.getElementById("txtManipInput");
const cardTwoTarget = document.getElementById("txtManipOutput");

function makeUpper() {
    cardTwoTarget.textContent = cardTwoSource.value.toUpperCase();
}

function makeLower() {
    cardTwoTarget.textContent = cardTwoSource.value.toLowerCase();
}

function stringLength() {
    cardTwoTarget.textContent = cardTwoSource.value.length;
}

// Only clears the input text box, not the output text displayed to the page.
function clearInput() {
    // Target input text box is specified by the event source button's value.
    document.getElementById(this.value).value = "";
}

// Card 3: Arrays

const countArray = [];

/*
Adds a number to the back of the array if 0 is at the front.
Adds a number to the front of the array if 0 is NOT at the front.
This can make it weird in the case of the array being shuffled but it allowed me to make use of both functions for adding to the array.
*/
function increaseArray() {
    if (countArray[0] === 0) {
        countArray.push(countArray.length);
    } else {
        countArray.unshift(countArray.length);
    }
    updateCountArrayDisplay();
}

/*
Removes a number from the back of the array if 0 is at the front.
Removes a number from the front of the array if 0 is NOT at the front.
As with the increaseArray() function, this can make it weird in the case of the array being shuffled but it allowed me to make use of both functions for adding to the array.
*/
function decreaseArray() {
    if (countArray.length > 0) {
        if (countArray[0] === 0) {
            countArray.pop();
        } else {
            countArray.shift();
        }
        updateCountArrayDisplay();
    }
}

function updateCountArrayDisplay() {
    const len = countArray.length;
    document.getElementById("arrayLength").innerHTML = len;
    if (len > 0) {
        document.getElementById("arrayContents").innerHTML = countArray.toString();
    } else {
        document.getElementById("arrayContents").innerHTML = "empty";
    }
}

function reverseArray() {
    countArray.reverse();
    updateCountArrayDisplay();
}

// Uses the Fisher Yates method of shuffling an array as specified in the W3schools JS Array Sort tutorial.
function shuffleArray() {
    for (let i = countArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = countArray[i];
        countArray[i] = countArray[j];
        countArray[j] = k;
    }
    updateCountArrayDisplay();
}

function sortArray() {
    countArray.sort((a, b) => a - b)
    updateCountArrayDisplay();
}

function sumArrayContents() {
    let sum = 0;
    for (let num of countArray) {
        sum += num;
    }
    document.getElementById(this.value).innerHTML = sum;
}


function displayDateTime() {
    const dateTimeOutput = document.getElementById("dateTimeOutput");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateTime = new Date();

    dateTimeOutput.innerHTML = `It is currently ${dateTime.getHours()}:${dateTime.getMinutes()} on ${months[dateTime.getMonth()]} ${dateTime.getDate()}, ${dateTime.getFullYear()}`;
}

function rollDiceSix() {
    const diceOutput = document.getElementById("diceOutput");
    const diceObj = new Dice(6)
    diceOutput.innerHTML = "..."
    setTimeout(() => {
        diceOutput.innerHTML = diceObj.roll();
    }, 125);
}