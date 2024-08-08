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

function clearInput(inputSourceId) {
    document.getElementById(inputSourceId).value = "";
}

function increaseArray() {
    if (countArray[0] === 0) {
        countArray.push(countArray.length);
    } else {
        countArray.unshift(countArray.length);
    }
    updateCountArrayDisplay();
}

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

function randomizeArray() {
    countArray.sort(() => 0.5 - Math.random());
    updateCountArrayDisplay();
}

function sortArray() {
    countArray.sort((a, b) => a - b)
    updateCountArrayDisplay();
}