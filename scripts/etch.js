// Obtém o número de linhas e colunas do usuário
let numRows = parseInt(prompt("How many rows?"));
let numColumns = parseInt(prompt("How many columns?"));

function getSquareSize() {
    let padding;
    let window_width = window.innerWidth; // Obtém a largura da janela
    let window_height = window.innerHeight; // Obtém a altura da janela

    let game_width = Math.floor(window_width * 0.35); // Calcula a largura do jogo com base na largura da janela
    let game_height = Math.floor(window_height * 0.35); // Calcula a altura do jogo com base na altura da janela

    let pad1 = Math.floor(game_width / numRows); // Calcula o padding com base no número de linhas
    let pad2 = Math.floor(game_height / numColumns); // Calcula o padding com base no número de colunas

    if (pad1 < pad2) {
        padding = pad1; // Seleciona o menor padding para garantir o ajuste na tela
    } else {
        padding = pad2;
    }
    return padding; // Retorna o valor de padding calculado
}

document.body.style.paddingTop = '10px'; // Define padding superior para o corpo da página

const body_tag = document.querySelector('body'); // Seleciona o elemento body

function createNewBoard() {
    location.reload(); // Recarrega a página para criar um novo tabuleiro
}

function resetBoard() {
    const divs = document.querySelectorAll('.square'); // Seleciona todos os quadrados
    divs.forEach((div) => {
        div.style.backgroundColor = 'initial'; // Reseta a cor de fundo dos quadrados
    });
}

// Cria as linhas do tabuleiro
for (i = 1; i <= numRows; i++) {
    row = document.createElement('div');
    row.setAttribute("id", "container" + String(i)); // Define o ID da linha
    body_tag.appendChild(row); // Adiciona a linha ao corpo do documento
}

// Cria os quadrados para cada linha
for (i = 1; i <= numRows; i++) {
    const container_tag = document.querySelector('#container' + String(i));
    square_row = document.createElement('div');
    square_row.setAttribute("id", "div" + String(i)); // Define o ID para a linha de quadrados
    container_tag.appendChild(square_row);
    // Cria as colunas (quadrados) para cada linha
    for (j = 1; j <= numColumns; j++) {
        const column = document.createElement('div');
        column.setAttribute("class", "square"); // Define a classe para cada quadrado
        column.setAttribute("id", "square-row" + String(i)); // Define o ID para o quadrado

        square_row.appendChild(column); // Adiciona o quadrado à linha
    }
}

let square_Div;

divs = document.querySelectorAll('.square');
divs.forEach((div) => {
    div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = 'black'; // Muda a cor de fundo do quadrado para preto ao passar o mouse
    });
});

// Muda o tamanho dos quadrados
paddingResult = getSquareSize();
divs = document.querySelectorAll('.square');
divs.forEach((div) => {
    div.style.padding = String(paddingResult) + "px"; // Define o padding dos quadrados com base no cálculo anterior
});
