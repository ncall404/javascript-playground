import { Dice } from "./dice.js";
let itemList;

window.onload = () => {
    // Adds click event listeners to buttons.
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
    document.getElementById("rollDice").addEventListener('click', rollDice);

    document.getElementById("addItem").addEventListener('click', addItem);
    document.getElementById("clearList").addEventListener('click', clearList);

    // Loads stored list items for card 6 if any are stored.
    if (localStorage.itemList) {
        itemList = localStorage.getItem("itemList");
        loadList();
    } else {
        itemList = [];
    }
}

// Card 1: Alerts
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
    countArray.sort((a, b) => a - b);
    updateCountArrayDisplay();
}

function sumArrayContents() {
    let sum = 0;
    for (let num of countArray) {
        sum += num;
    }
    document.getElementById(this.value).innerHTML = sum;
}

// Card 4: Date and Time
function displayDateTime() {
    const dateTimeOutput = document.getElementById("dateTimeOutput");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateTime = new Date();

    dateTimeOutput.innerHTML = `It is currently ${dateTime.getHours()}:${dateTime.getMinutes()} on ${months[dateTime.getMonth()]} ${dateTime.getDate()}, ${dateTime.getFullYear()}`;
}

// Card 5: Dice Roll (Math.random, Classes, Import/Export)
function rollDice() {
    const diceSides = document.getElementById("diceSides").value;
    const diceOutput = document.getElementById("diceOutput");

    if (Number(diceSides) < 2) {
        diceOutput.innerHTML = "Number of sides must be at least 2";
    } else {
        const diceObj = new Dice(diceSides);
        // This timeout with the temporary text of "..." makes it clear that there the button is working in the case of getting the same value as a previous roll.
        diceOutput.innerHTML = "...";
        setTimeout(() => {
            diceOutput.innerHTML = diceObj.roll();
        }, 125);
    }
}

// Card 6: Saved List (Web Storage, DOM Manipulation)
function addItem() {
    const itemListInput = document.getElementById("itemListInput");

    // Both adds the item to the array AND resaves the array to localstorage.
    if (itemListInput.value) {
        itemList.push(itemListInput.value);
        localStorage.itemList = itemList;

        itemListInput.value = "";
        
        displayList();
    }
}

function removeItem() {
    const item = this.parentNode;
    const itemContents = item.firstChild.innerHTML;
    console.log(itemContents);

    itemList.splice(itemList.indexOf(itemContents), 1);
    localStorage.itemList = itemList;

    displayList();
}

function loadList() {
    itemList = localStorage.getItem("itemList").split(","); // Retrieves from localstorage and creates array.
    displayList();
}

function clearList() {
    localStorage.removeItem("itemList");
    itemList = [];
    displayList();
}

function displayList() {
    const itemListOutput = document.getElementById("itemList");

    itemListOutput.innerHTML = ""; // Clears current display of list items.

    // Creates list item for each item in the array.
    itemList.forEach(item => {
        const div = document.createElement("div");
        div.className = "list-item elevated-item";
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(item));
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-danger";
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener('click', removeItem);
        div.append(p, deleteBtn);

        itemListOutput.appendChild(div);
    });
}