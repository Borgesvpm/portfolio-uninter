function getComputerChoice() {
    computer = ["rock", "paper", "scissors"];

    const computerChoice = computer[Math.floor(Math.random() * computer.length)];

    const container = document.querySelector('#result');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "The computer chose " + computerChoice;

    container.appendChild(content);

    return computerChoice;
}

function playRound(humanSelection, computerSelection) {
    humanChoice = humanSelection;
    computerChoice = computerSelection;

    let result;

    if (humanChoice === computerChoice) {
        result = "Draw.";
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            result = "You lost!";
        }
        else if (computerChoice === "scissors") {
            result = "You won!";
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            result = "You lost!";
        }
        else if (computerChoice === "rock") {
            result = "You won!";
        }
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "You lost!";
        }
        else if (computerChoice === "paper") {
            result = "You won!";
        }
    }


    return result;
}

function showResults(result) {
    const container = document.querySelector('#result');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = result;

    container.appendChild(content);
}

function addPoints(res) {
    console.log(res)
    if (res == "You won!") {
        return 1
    }
    else if (res == "You lost!") {
        return -1
    }
    else {
        return 0
    }
}

function checkWinner(finalPoints) {
    console.log(finalPoints)
    if (finalPoints < 0) {
        return ("The overall winner is: The almighty computer!")
    }
    else if (finalPoints == 0) {
        return ("The overall winner is: An amazing draw!")
    }
    if (finalPoints > 0) {
        return ("The overall winner is: The incredible human!")
    }
}



// Looping through similar elements
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
let playerChoice = "";
let counterRounds = 0;
let overallPoints = 0;
// we use the .forEach method to iterate through each button


buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playerChoice = button.id;
        computerChoice = getComputerChoice()

        result = playRound(playerChoice, computerChoice);
        overallPoints += addPoints(result)
        console.log(overallPoints);
        counterRounds += 1;
        showResults(result)

        if (counterRounds == 5) {

            console.log(overallPoints)
            messageWinner = checkWinner(overallPoints)
            const container = document.querySelector('#result');

            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = messageWinner;

            container.appendChild(content);
        }
    });
});

