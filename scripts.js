const compOptions = [
    "r",
    "p",
    "s"
];


function random() {
    let rand = compOptions[Math.floor(Math.random() * compOptions.length)];
    return rand;
};

// ROCK
const rockDraw = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy chooses rock. It's a draw!";
};
const rockLose = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy choose paper. You lose!";
};
const rockWin = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy chooses scissors. YOU WIN!";
};

function shootRock() {
    let compChoice
    compChoice = random();
    if (compChoice === "r") {
        return rockDraw();
    }
    else if (compChoice === "p") {
        return rockLose();
    }
    else {
        return rockWin();
    };
};

// PAPER
const paperDraw = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy chooses paper. It's a draw!";
};
const paperLose = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy chooses scissors. You Lose!";
};
const paperWin = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy chooses rock. YOU WIN!";
};

function shootPaper() {
    let compChoice = random();
    if (compChoice === "p") {
        return paperDraw();
    }
    else if (compChoice === "s") {
        return paperLose();
    }
    else {
        return paperWin();
    };
};

// SCISSORS
const scissorsDraw = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy chooses scissors. It's a draw!";
};
const scissorsLose = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy choose rock. You lose!";
};
const scissorsWin = () => {
    document.querySelector(".compOutcomes").innerHTML = "Compy chooses paper. YOU WIN!";
};

function shootScissors() {
    const compChoice = random();
    if (compChoice === "s") {
        paperDraw();
    }
    else if (compChoice === "r") {
        paperLose();
    }
    else {
        paperWin();
    };
};