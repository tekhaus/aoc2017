const steps = 355
const values = 50000000
let bufferSize = 1
let position = 0
let shortCircuit = 0

for (let i of Array(values).keys()) {
  // update position where insert would be made with modulous of array length
  position = ((position + steps) % bufferSize) + 1
  // increase buffer by 1 to simulate adding a value
  bufferSize++
  // check if the new value is going into position 1 (i.e. the short circuit value)
  if (position === 1) shortCircuit = i + 1
}

console.log(`${shortCircuit} after ${values} values entered`)