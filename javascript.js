const container = document.querySelector('.container')
let grid_size = 16

function generateGrid(grid_size) {
    for (let i = 0; i < grid_size -1; i++) {
        const column = document.createElement('div')
        for (let i = 0; i < grid_size -1; i++) {
            const row = document.createElement('div')
            row.style.height = `${600/grid_size}px`
            row.style.width = `${600/grid_size}px`
            row.style.border = 'thin, solid, black'
            row.classList.add('square')
            column.appendChild(row)
        }
    container.appendChild(column)
    }
}

generateGrid(grid_size)

function changeColor() {
    let square = document.querySelectorAll('.square')
    square.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red'
        }) 
    })
}

changeColor()