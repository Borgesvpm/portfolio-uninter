// Cache do DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    choices = ["r", "p", "s"]; // Define as opções disponíveis
    const randomNumber = Math.floor(Math.random() * choices.length); // Gera um número aleatório para escolher a jogada do computador
    const computerChoice = choices[randomNumber];
    return computerChoice; // Retorna a escolha do computador
}

function convertLetterToWord(letter) {
    if (letter === "r") return "Rock"; // Converte "r" para "Rock"
    if (letter === "p") return "Paper"; // Converte "p" para "Paper"
    else return "Scissors"; // Converte "s" para "Scissors"
}

function win(user, computer) {
    userScore++; // Incrementa a pontuação do usuário
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub(); // Formata a palavra "user"
    const smallCompWord = "comp".fontsize(3).sub(); // Formata a palavra "comp"
    result_p.innerHTML = `${convertLetterToWord(user)}${smallUserWord} beats ${convertLetterToWord(computer)}${smallCompWord}. You win!`;

    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add("green-glow"); // Adiciona o efeito de "vitória" ao botão escolhido
    setTimeout(function () { userChoice_div.classList.remove("green-glow"); }, 500); // Remove o efeito após 500ms
}

function lose(user, computer) {
    computerScore++; // Incrementa a pontuação do computador
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub(); // Formata a palavra "user"
    const smallCompWord = "comp".fontsize(3).sub(); // Formata a palavra "comp"
    result_p.innerHTML = `${convertLetterToWord(computer)}${smallCompWord} beats ${convertLetterToWord(user)}${smallUserWord}. You lose!`;

    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add("red-glow"); // Adiciona o efeito de "derrota" ao botão escolhido
    setTimeout(function () { userChoice_div.classList.remove("red-glow"); }, 500); // Remove o efeito após 500ms
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(3).sub(); // Formata a palavra "user"
    const smallCompWord = "comp".fontsize(3).sub(); // Formata a palavra "comp"
    result_p.innerHTML = `${convertLetterToWord(user)}${smallUserWord} is the same as ${convertLetterToWord(computer)}${smallCompWord}. Draw!`;

    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add("gray-glow"); // Adiciona o efeito de "empate" ao botão escolhido
    setTimeout(function () { userChoice_div.classList.remove("gray-glow"); }, 500); // Remove o efeito após 500ms
}

function game(userChoice) {
    let computerChoice = getComputerChoice(); // Obtém a escolha do computador
    switch (userChoice + computerChoice) { // Compara as escolhas do usuário e do computador
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice); // O usuário ganha
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice); // O usuário perde
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice); // Empate
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r"); // Joga com "Rock" quando clicado
    });

    paper_div.addEventListener("click", function () {
        game("p"); // Joga com "Paper" quando clicado
    });

    scissors_div.addEventListener("click", function () {
        game("s"); // Joga com "Scissors" quando clicado
    });
}

main(); // Inicializa os eventos de clique