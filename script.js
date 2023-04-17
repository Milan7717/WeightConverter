//variable

const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");

const resultEl = document.getElementById("result");

let errorTime;
let resultTime;

function updateResult() {
    if (inputEl.value <= 0 || isNaN(inputEl.value)) {
        errorEl.innerText = "Please enter a valid number!"

        //removing the value and text after 2000 auto

        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorEl.innerText = "";
            inputEl.value = "";

        }, 2000);
    } else {
        resultEl.innerText = (+inputEl.value / 2.2).toFixed(3);


        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultEl.innerText = "";
            inputEl.value = "";
        }, 10000);
    }
}


inputEl.addEventListener("input", updateResult)