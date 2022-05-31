const container = document.querySelector("#grid-container");
const sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener('click', changeSize);

function makeSquares(cols, rows) {
    // Setting container rows and cols to what is passed to the function
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    // Creating divs (squares) equal to (cols * rows)
    for (i = 0; i < (cols * rows); i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        // square.style.border = "1px solid red";
        container.appendChild(square);
        square.addEventListener('mouseover', function() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
}

function changeSize() {
    // Code to remove the previous squares from the grid
    var elements = document.getElementsByClassName('square'), element;
    while (element = elements[0]) {
        element.parentNode.removeChild(element);
    }
    // Asking the user for the new size of the grid
    const gridSide = prompt("How many squares on the side of the grid? (Limit 4-100)", '');
    if (gridSide > 100) {
        makeSquares(16, 16);
    } else if (gridSide < 2) {
        makeSquares(16, 16);
    } else {
        makeSquares(gridSide, gridSide);
    };
};

// Calling the function to make a 16 x 16 grid
makeSquares(16, 16);