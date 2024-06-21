const grid = document.querySelector('.grid');

let squares;

function setGrid(squares) {
    for (let i = 0; i <= squares; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j <= squares; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    addCellHover();
}

setGrid(16);

function removeGrid() {
    const cell = document.querySelectorAll('.cell');
    cell.forEach((e) => e.parentNode.removeChild(e));
}

const button = document.querySelector('#size');
button.addEventListener('click', () => {
    squares = prompt("Please, enter amount of squares per side for the new grid");
    removeGrid();
    setGrid(squares);
})


function addCellHover() {
    const cell = document.querySelectorAll('.cell');

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('mouseover', () => {
            cell[i].style.backgroundColor = 'red';
        })
    }
}






