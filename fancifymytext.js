const bigButton = document.querySelector("#biggerButton");
const textArea = document.getElementById("textBox");
const fancyRadio = document.getElementById("fancyRadio");
const boringRadio = document.getElementById("boringRadio");
const mooButton = document.querySelector("#mooButton");

// bigger button function
bigButton.onclick = () => {
    textArea.style.fontSize = '1.5em';
};

// radio button functions
    //fancy radio
fancyRadio.addEventListener("change", () => {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
});

    //boring radio
boringRadio.addEventListener("change", () => {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
});

// Moo function
mooButton.onclick = () => {
    textArea.value = textArea.value.toUpperCase();
    let text = textArea.value;
    let parts = text.split(".");
    textArea.value = parts.join("-Moo");

};


