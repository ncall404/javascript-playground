const cardTwoSource = document.getElementById("txtManipInput");
const cardTwoTarget = document.getElementById("txtManipOutput");
const arrayLengthDisplay = document.getElementById("arrayLength");
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
    arrayLengthDisplay.innerHTML = countArray.length;
}

function decreaseArray() {
    if (countArray.length > 0) {
        if (countArray[0] === 0) {
            countArray.pop();
        } else {
            countArray.shift();
        }
        arrayLengthDisplay.innerHTML = countArray.length;
    }
}

function showCountArray() {
    window.alert(countArray.toString());
}

function reverseArray() {
    countArray.reverse();
}