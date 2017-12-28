const fs = require('fs')

// read input file and split on commas to form an array
const path = fs.readFileSync('day11-input.txt', 'utf8').split(',')

let movements = {
  n: 0,
  ne: 0,
  se: 0,
  s: 0,
  sw: 0,
  nw: 0
}

// populate movements from path
path.forEach(direction => movements[direction]++)

const cancelOpposites = (direction1, direction2) => {
  if (direction1 > direction2) {
    direction1-= direction2
    direction2 = 0
  } else if (direction2 > direction1) {
    direction2-= direction1
    direction1 = 0
  } else {
    direction1 = 0
    direction2 = 0
  }
  return [direction1, direction2]
}

const cancelDiagonals = (direction1, direction2, direction3) => {
  if (direction2 > direction3) {
    direction1+= direction3
    direction2-= direction3
    direction3 = 0
  } else if (direction3 > direction2) {
    direction1+= direction2
    direction3-= direction2
    direction2 = 0
  } else {
    direction1+= direction2
    direction2 = 0
    direction3 = 0
  }
  return [direction1, direction2, direction3]  
}

// reduce opposite movements
;[movements.n, movements.s] = cancelOpposites(movements.n, movements.s)
;[movements.ne, movements.sw] = cancelOpposites(movements.ne, movements.sw)
;[movements.nw, movements.se] = cancelOpposites(movements.nw, movements.se)
// reduce angular movements (i.e. zigzags) in clockwise order
;[movements.n, movements.ne, movements.nw] = cancelDiagonals(movements.n, movements.ne, movements.nw)
;[movements.ne, movements.n, movements.se] = cancelDiagonals(movements.ne, movements.n, movements.se)
;[movements.se, movements.s, movements.ne] = cancelDiagonals(movements.se, movements.s, movements.ne)
;[movements.s, movements.se, movements.sw] = cancelDiagonals(movements.s, movements.se, movements.sw)
;[movements.sw, movements.s, movements.nw] = cancelDiagonals(movements.sw, movements.s, movements.nw)
;[movements.nw, movements.n, movements.sw] = cancelDiagonals(movements.nw, movements.n, movements.sw)
  
// count 'em up
const shortest = Object.values(movements).reduce((sum, curr) => sum+= curr)

console.log('reduced movements:', movements)
console.log(`shortest path: ${shortest}`)