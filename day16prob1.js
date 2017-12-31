const fs = require('fs')

// read input file and split on commas to form an array
const moves = fs.readFileSync('day16-input.txt', 'utf8').split(',')

let line = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']

const spin = (arr, amount) => arr.splice(-amount).concat(arr)

const exchange = (arr, pos1, pos2) => {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
  return arr
}

const partner = (arr, item1, item2) => exchange(arr, arr.indexOf(item1), arr.indexOf(item2))

// const moves = ['s1', 'x3/4', 'pe/b']

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

console.log(`line order after dance: ${line.join('')}`)
