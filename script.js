//Declaring conmtainer Div
const container = document.getElementById("container");

//function to create 16 divs in a loop
function createDiv() {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
}

createDiv();