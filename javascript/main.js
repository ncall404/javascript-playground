const cardTwoSource = document.getElementById("txtManipInput");
const cardTwoTarget = document.getElementById("txtManipOutput");

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