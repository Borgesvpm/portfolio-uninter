// your JavaScript file
// const container = document.querySelector('#container');
let numRows = parseInt(prompt("How many rows?"));
let numColumns = parseInt(prompt("How many columns?"));

function getSquareSize() {
    let padding;
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;

    let game_width = Math.floor(window_width * 0.35);
    let game_height = Math.floor(window_height * 0.35);

    let pad1 = Math.floor(game_width / numRows);
    let pad2 = Math.floor(game_height / numColumns);

    if (pad1 < pad2) {
        padding = pad1;
    }

    else {
        padding = pad2;
    };
    return padding;

}

document.body.style.paddingTop = '10px'

const body_tag = document.querySelector('body')

function createNewBoard() {
    location.reload();
}

function resetBoard() {
    const divs = document.querySelectorAll('.square');
    divs.forEach((div) => {
        div.style.backgroundColor = 'initial';
    });
}

// Create containers row wise
for (i = 1; i <= numRows; i++) {
    row = document.createElement('div');
    row.setAttribute("id", "container" + String(i));
    body_tag.appendChild(row);
}

// Create squares row-wise
for (i = 1; i <= numRows; i++) {
    const container_tag = document.querySelector('#container' + String(i))
    square_row = document.createElement('div');
    square_row.setAttribute("id", "div" + String(i));
    container_tag.appendChild(square_row);
    // Create squares column-wise
    for (j = 1; j <= numColumns; j++) {
        const column = document.createElement('div');
        column.setAttribute("class", "square");
        column.setAttribute("id", "square-row" + String(i));

        square_row.appendChild(column);
    }
}

let square_Div

divs = document.querySelectorAll('.square');
divs.forEach((div) => {
    div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = 'black';
    });
});

// change square size

paddingResult = getSquareSize()
divs = document.querySelectorAll('.square');
divs.forEach((div) => {
    div.style.padding = String(paddingResult) + "px"; // Change the padding value to your desired value
});