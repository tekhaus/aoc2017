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

// using the cube coordinate system as detailed here - https://www.redblobgames.com/grids/hexagons/#distances-cube
// x + y + z = 0
let loc = [0, 0, 0] // (i.e. x,y,z coordinates)
let stepsAway = []

// adjust location from movements along path
path.forEach(movement => {
  switch (movement) {
    case 'n':
      loc[1]++ // y: +1
      loc[2]-- // z: -1
      break
    case 'ne':
      loc[0]++ // x: +1
      loc[2]-- // z: -1
      break
    case 'se':
      loc[0]++ // x: +1
      loc[1]-- // y: -1
      break
    case 's':
      loc[1]-- // y: -1
      loc[2]++ // z: +1
      break
    case 'sw':
      loc[0]-- // x: -1
      loc[2]++ // z: +1
      break
    case 'nw':
      loc[0]-- // x: -1
      loc[1]++ // y: +1
      break
  }
  // store the total distance away from start
  stepsAway.push((Math.abs(loc[0]) + Math.abs(loc[1]) + Math.abs(loc[2])) / 2)
})

console.log(`furthest distance: ${Math.max(...stepsAway)}`)