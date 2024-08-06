function giveMessage() {
    window.alert("Test alert!");
}

const source = document.getElementById("txtManipInput");
const target = document.getElementById("txtManipOutput");

function makeUpper() {
    target.textContent = source.value.toUpperCase();
    console.log(source.value);
}

function makeLower() {
    target.textContent = source.value.toLowerCase();
    console.log(source.value);
}

function stringLength() {
    target.textContent = source.value.length;
}