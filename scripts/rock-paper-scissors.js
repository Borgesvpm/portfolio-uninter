function getComputerChoice() {
    computer = ["rock", "paper", "scissors"];

    const randomElement = computer[Math.floor(Math.random() * computer.length)];
    return randomElement;
}

function getHumanChoice() {
    human = prompt("Choose rock, paper or scissors: ").toLowerCase();
    return human;
}

function playRound(humanSelection, computerSelection) {
    humanChoice = humanSelection;
    computerChoice = computerSelection;

    let result;
    let points = 0;

    if (humanChoice === computerChoice) {
        result = "Draw.";
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            result = "You lost!";
            points -= 1;
        }
        else if (computerChoice === "scissors") {
            result = "You won!";
            points += 1;
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            result = "You lost!";
            points -= 1;
        }
        else if (computerChoice === "rock") {
            result = "You won!";
            points += 1;
        }
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "You lost!";
            points -= 1;
        }
        else if (computerChoice === "paper") {
            result = "You won!";
            points += 1;
        }
    }

    console.log("You chose", humanChoice);
    console.log("The computer chose", computerChoice);
    console.log("The result is: ", result);

    return points;
}

function game() {
    rounds = Number(prompt("Choose the number of rounds you want to play: "));

    overallPoints = 0;

    for (let i = 0; i < rounds; i++) {

        human = getHumanChoice();
        comp = getComputerChoice();

        gameResult = playRound(human, comp);
        overallPoints += gameResult;
    }

    if (overallPoints < 0) {
        console.log("The overall winner is: The almighty computer!");
    }
    else if (overallPoints == 0) {
        console.log("The overall winner is: An amazing draw!");
    }
    if (overallPoints > 0) {
        console.log("The overall winner is: The incredible human!");
    }
}

game();