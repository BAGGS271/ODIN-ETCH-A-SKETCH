//Declaring conmtainer Div
const container = document.getElementById("container");

//function to get a number from the user
function getNumber() {
    let number = prompt("enter a number between 1 - 100");
    if (number >= 100 || number <= 1) {
        alert("Please enter a valid number");
        return getNumber();
    }
    return number;
}

//function to create divs from a number input
function createCollumn() {
    clear();
    let number = getNumber();

    for (let i = 0; i < number; i++) {
        const collumns = document.createElement("div");
        collumns.classList.add("collumnBox");
        container.appendChild(collumns);

    for (let i = 0; i < number; i++) {
        const rows = document.createElement("div");
        rows.classList.add("sketchBox");
        collumns.appendChild(rows);
    }
}
const sketchBox = document.querySelectorAll(".sketchBox");
sketchBox.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
});
}

//gets number and createws div on button press
const sizeButton = document.getElementById("sizeButton")
sizeButton.addEventListener("click", createCollumn);

//function to clear the grid
function clear() {
    const collumnBox = document.querySelectorAll(".collumnBox");
    collumnBox.forEach((collumnBox) => {
        collumnBox.remove();
    });
}

//button press to clear grid
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);