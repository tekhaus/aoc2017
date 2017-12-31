const fs = require('fs')
// read input file and split on commas to form an array
const moves = fs.readFileSync('day16-input.txt', 'utf8').split(',')
const dances = 1000000000

let line = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
let endPositions = new Set()
endPositions.add(line.join(''))

// dance moves
const spin = (arr, amount) => arr.splice(-amount).concat(arr)

const exchange = (arr, pos1, pos2) => {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
  return arr
}

const partner = (arr, item1, item2) => exchange(arr, arr.indexOf(item1), arr.indexOf(item2))

// repeat until we see same order
while (true) {
  for (let move of moves) {
    let divider = [...move].indexOf('/')
    switch (move.charAt(0)) {
      case 's':
        line = spin(line, move.slice(1))
        break
      case 'x':
        line = exchange(line, Number(move.slice(1, divider)), Number(move.slice(divider + 1)))
        break
      case 'p':
        line = partner(line, move.slice(1, divider), move.slice(divider + 1))
        break
    }
  }
  if (endPositions.has(line.join(''))) {
    break
  } else {
    endPositions.add(line.join(''))
  }
}

console.log(`line order after ${dances} dances: ${[...endPositions][dances % endPositions.size]}`)
