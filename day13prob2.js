const fs = require('fs')
const input = fs.readFileSync('day13-input.txt', 'utf8').split('\n')

// convert input into array of layer objects
const firewall = input.map(curr => {
  [depth, range] = curr.split(': ').map(Number)
  
  return {
    depth,
    range
  }
})

let caught = true
let delay = 0

const isCaught = layer => {
  // how frequently is scanner in position 0
  let scannerPeriod = 2 * (layer.range - 1)
  // add delay to scanner position check
  return (layer.depth + delay) % scannerPeriod === 0
}

while (caught === true) {
  caught = false
  for (let layer of firewall) {
    // if caught, increment and try again
    if (isCaught(layer)) {
      caught = true
      delay++
      break
    }
  }
}

console.log(`delay to not get caught is ${delay}`)