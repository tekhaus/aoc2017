let steps = 12386363
let state = [0, 0, 'A']
let tape = [0]
let index = 0
let checkSum = 0

// state => [value, direction, next]
const stateChange = state => {
  switch (state[2]) {
    case 'A':
      return !state[0] ? [1, 1, 'B'] : [0, -1, 'E']
    case 'B':
      return !state[0] ? [1, -1, 'C'] : [0, 1, 'A']
    case 'C':
      return !state[0] ? [1, -1, 'D'] : [0, 1, 'C']
    case 'D':
      return !state[0] ? [1, -1, 'E'] : [0, -1, 'F']
    case 'E':
      return !state[0] ? [1, -1, 'A'] : [1, -1, 'C']
    case 'F':
      return !state[0] ? [1, -1, 'E'] : [1, 1, 'A']
  }
}

// start program
while (steps > 0) {
  state = stateChange(state)
  // update value at cursor first
  tape[index] = state[0]
  // then move cursor left or right 1 position (and add 0 to beginning or end of array if needed)
  index+= state[1]
  if (index < 0) {
    tape.unshift(0)
    index = 0
  } else if (index === tape.length) {
    tape.push(0)
  }
  // update state with new cursor value
  state[0] = tape[index]
  steps--
}

// add it all up
checkSum = tape.reduce((sum, curr) => sum+= curr)

console.log(`checksum is ${checkSum}`)