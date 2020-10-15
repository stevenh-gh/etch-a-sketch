const grid = document.querySelector('.grid');

let createGrid = (GRID_SIZE = 16) => {
    for (let i = 1; i <= GRID_SIZE; ++i) {
        for (let j = 1; j <= GRID_SIZE; ++j) {
            const div = document.createElement('div');
            div.setAttribute('id', `${i},${j}`);
            div.classList.add('cell');
            grid.appendChild(div);
        }
    }

    grid.style.setProperty('--grid-size', `${GRID_SIZE}`);

    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e => {
            e.target.style.cssText = 'background-color: rgb(98, 98, 98);'
        });
    });
};


const clearGrid = document.querySelector('#clear-grid');
clearGrid.addEventListener('click', () => {
    while (true) {
        gSize = prompt('enter a number between 1 and 100');
        if ((gSize >= 1 && gSize <= 100) || gSize === null) { break; }
    }

    if (gSize) { removeExistingGrid(); createGrid(gSize); }
});


let removeExistingGrid = () => {
    let divs = document.querySelectorAll('.cell');
    divs.forEach(div => grid.removeChild(div));
};

createGrid();