const grid = document.querySelector('.grid');
let width;
let height;

function setGrid(width, height) {
    for(let i=0; i<= height; i++ ) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        for(let j=0; j<= width; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

setGrid(16,16);


const cell = document.querySelectorAll('.cell');

for( let i=0; i< cell.length; i++) {
    cell[i].addEventListener('mouseover', () => {
        cell[i].style.backgroundColor = 'red';
    })
}



