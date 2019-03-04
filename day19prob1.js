const fs = require('fs')
const input = fs.readFileSync('day19-input.txt', 'utf8').split('\n')

const matrix = []

input.forEach(line => {
  matrix.push([...line])
})

let x = 0
let y = matrix[0].indexOf('|')
let position = [x, y]
let direction = 'down'
let chars = []
let validMove = true

const checkPath = position => {
  return false
}

const instruction = item => {
  switch(item) {
    case ' ':
      return 'empty'
      break
    case '|':
      direction === 'up' ? x-- : x++
      return 'move'
      break
    case '-':
      direction === 'left' ? y-- : y++
      return 'move'
      break
    case '+':
      // keep same direction, unless empty or end, then check left, then check right
      return 'move'
      break
    default: // should be a character
      chars.push(item)
      if (direction === 'up') {
        x--
      } else if (direction === 'down') {
        x++
      } else if (direction === 'left') {
        y--
      } else {
        y++
      }
      return 'move'
  }
}

while (validMove) {
  instruction(matrix[x][y])
}
// let position = [x, matrix[0].indexOf('|')]

console.log(matrix)
console.log(x, y, matrix[x][y])
