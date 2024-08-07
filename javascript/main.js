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
    countArray.push(countArray.length)
    arrayLengthDisplay.innerHTML = countArray.length;
}

function decreaseArray() {
    if (countArray.length > 0) {
        countArray.pop()
        arrayLengthDisplay.innerHTML = countArray.length;
    }
}

function showCountArray() {
    window.alert(countArray.toString())
}