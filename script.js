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