const currentDate = new Date();
const words = ["appleee"];        
let inputElement = [];
let random_word = "";
let chosenWord = words[Math.floor(Math.random() * words.length)];
let win = 0;
let lose = 25;

if (chosenWord.length <= 5) {
    random_word = chosenWord.charAt(0) + "_".repeat(chosenWord.length - 1);
} else if (chosenWord.length > 5 && chosenWord.length <= 7) {
    random_word = chosenWord.charAt(0) + "_".repeat(chosenWord.length - 3) + chosenWord.slice(-2);
} else if (chosenWord.length > 7 && chosenWord.length <= 10) {
    random_word = chosenWord.charAt(0) + "_".repeat(chosenWord.length - 4) + chosenWord.slice(-3, -1) + "_".repeat(2);
} else {
    random_word = chosenWord.charAt(0) + "_".repeat(chosenWord.length - 6) + chosenWord.slice(-5, -2) + "_".repeat(2) + chosenWord.slice(-1);
}

function create_input(index, letter) { 
    const inputElement = document.createElement("input");
    inputElement.className = 'input';
    inputElement.id = index;
    inputElement.type = 'text';
    inputElement.maxLength = 1;
    inputElement.value = letter;
    return inputElement;
}

for (let i = 1; i <= chosenWord.length; i++) {
    inputElement = create_input(i, random_word.charAt(i - 1));
    document.getElementById('display').appendChild(inputElement);
}

function log() {
    let allFilled = true;
    for (let index = 1; index <= chosenWord.length; index++) {
        const input = document.getElementById(index);

        if (input.value === chosenWord[index - 1]) {
            input.style.color = "green";
            win++;
        } else {
            // input.style.color = "red";
            lose--;
            if(lose === 0){
                alert("loser");
                location.reload();
            }
            // input.style.animation = "horizontal-shaking 0.5s ease-in-out"; //animation
            setTimeout(() => {
                input.value = "";
                input.style.animation = "";
            }, 300);
            allFilled = false;
        }
        
    }
    if (allFilled) {
        alert("Congrats \n ");
        clearInterval(startTimer);

        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}




let hr = min = sec = ms = "0" + 0,
startTimer;
let isRunning = false;

const startBtn = document.querySelector(".startbtn");

startBtn.addEventListener("click", () => {
if (!isRunning) {
startBtn.classList.add("active");
startTimer = setInterval(() => {
   ms++;
   ms = ms < 10 ? "0" + ms : ms;

   if (ms == 100) {
       sec++;
       sec = sec < 10 ? "0" + sec : sec;
       ms = "0" + 0;
   }
   if (sec == 60) {
       min++;
       min = min < 10 ? "0" + min : min;
       sec = "0" + 0;
   }
   if (min == 60) {
       hr++;
       hr = hr < 10 ? "0" + hr : hr;
       min = "0" + 0;
   }
   putValue();
}, 10);

isRunning = true;
}
});
function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}