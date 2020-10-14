const GRID_SIZE = 16;
const grid = document.querySelector('.grid');

for (let i = 1; i <= GRID_SIZE; ++i) {
    for (let j = 1; j <= GRID_SIZE; ++j) {
        const div = document.createElement('div');
        div.setAttribute('id', `${i},${j}`);
        div.classList.add('cell');
        grid.appendChild(div);
    }
}

let cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseover', e => {
        e.target.style.cssText = 'background-color: rgb(98, 98, 98);'
    });
});