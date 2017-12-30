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

let severity = 0

const isCaught = layer => {
  // how frequently is scanner in position 0
  let scannerPeriod = 2 * (layer.range - 1) 
  return layer.depth % scannerPeriod === 0
}

for (let layer of firewall) {
  // if caught add to severity
  if (isCaught(layer)) severity+= layer.depth * layer.range
}

console.log(`severity is ${severity}`)