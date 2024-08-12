const cardTwoSource = document.getElementById("txtManipInput");
const cardTwoTarget = document.getElementById("txtManipOutput");
const countArray = [];

function giveMessage() {
    window.alert("Test alert!");
}

function makeUpper() {
    cardTwoTarget.textContent = cardTwoSource.value.toUpperCase();
    console.log(cardTwoSource.value);
}

function makeLower() {
    cardTwoTarget.textContent = cardTwoSource.value.toLowerCase();
    console.log(cardTwoSource.value);
}

function stringLength() {
    cardTwoTarget.textContent = cardTwoSource.value.length;
}

// Only clears the input text box, not the output text displayed to the page.
function clearInput(inputSourceId) {
    document.getElementById(inputSourceId).value = "";
}

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

// Uses the Fisher Yates method of shuffling an array as specified in the w3schools JS Array Sort tutorial.
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

function displayDateTime() {
    const dateTimeOutput = document.getElementById("dateTimeOutput");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateTime = new Date();

    dateTimeOutput.innerHTML = `It is currently ${dateTime.getHours()}:${dateTime.getMinutes()} on ${months[dateTime.getMonth()]} ${dateTime.getDate()}, ${dateTime.getFullYear()}`;
}

function rollDiceSix() {
    const diceOutput = document.getElementById("diceOutput");
    diceOutput.innerHTML = "..."
    setTimeout(() => {
        diceOutput.innerHTML = Math.floor(Math.random() * 6) + 1;
    }, 125);
}