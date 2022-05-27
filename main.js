const container = document.querySelector("#grid-container");

function makeSquares(cols, rows) {
    // Setting container rows and cols to what is passed to the function
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    // Creating divs (squares) equal to (cols * rows)
    for (i = 0; i < (cols * rows); i++) {
        const square = document.createElement('div');
        square.style.border = '1px solid red';
        container.appendChild(square);
    }
}
// Calling the function to make a 16 x 16 grid
makeSquares(16, 16);