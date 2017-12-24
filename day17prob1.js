const steps = 355
const values = 2017
let buffer = [0]
let position = 0

for (let i of Array(values).keys()) {
  // locate position to make insert with modulous of array length
  position = ((position + steps) % buffer.length) + 1
  // insert value into array at position
  buffer = [...buffer.slice(0, position), i + 1, ...buffer.slice(position)]
}

// what number ("short-circuit") appears after the last insert
console.log(buffer[position + 1])