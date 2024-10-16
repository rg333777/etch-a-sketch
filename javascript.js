
const grid_size = 16;

function generateGrid(grid_size) {
    const container = document.querySelector('.container');
    for (let i = 1; i <= grid_size; i++) {
        const column = document.createElement('div');
        for (let i = 1; i <= grid_size; i++) {
            const row = document.createElement('div');
            row.style.height = `${600/grid_size}px`;
            row.style.width = `${600/grid_size}px`;
            row.style.border = 'thin, solid, black';
            row.classList.add('square');
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = 'red'
            })
            column.appendChild(row);
        }
    container.appendChild(column);
    }
}

generateGrid(grid_size)

const button = document.querySelector('button')
button.addEventListener('click', () => {
    const container = document.querySelector('.container');
    const new_grid_size = prompt('what length would you like the grid to be? (100 is the max)');
    container.innerHTML = '';
    generateGrid(new_grid_size)
    }
    
) 