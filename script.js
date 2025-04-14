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

//function to create divs changing on number input and getting the square route
function createDiv() {
    let number = getNumber();
    number = number * number;

    for (let i = 0; i < number; i++) {
        const div = document.createElement("div");
        div.classList.add("sketchBox");
        container.appendChild(div);
    }
}

//gets number and createws div on button press
const sizeButton = document.getElementById("sizeButton")
sizeButton.addEventListener("click", createDiv);


//changes div colour when hovered over
    const sketchBoxes = document.querySelectorAll(".sketchBox");
    sketchBoxes.forEach((sketchBox) => {
        sketchBox.addEventListener("mouseover", () => {
            sketchBox.style.backgroundColor = "blue";
        });
    });