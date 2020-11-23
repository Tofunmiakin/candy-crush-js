document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')

  //Amount of squares in the div
  const width = 8
  const squares = []

  const candyColors = [
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    'blue'
  ]

  //Each time the function loops, it creates a new square till it fills up the div
  const createBoard = () =>{
    for (let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      let randomColor = Math.floor(Math.random() * candyColors.length)
      square.style.backgroundColor = candyColors[randomColor]
      grid.appendChild(square)
      squares.push(square)
    }
  }

  createBoard()
}) 