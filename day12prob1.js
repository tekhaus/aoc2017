const fs = require('fs')
const input = fs.readFileSync('day12-input.txt', 'utf8').split('\n')

// convert input into array of program objects
const programs = input.map((program, index) => {
  return {
    id: index,
    connected: false,
    // convert strings to numbers and don't include self-linking pipes
    pipes: program.split(', ').map(pipe => Number(pipe)).filter(pipe => pipe !== index)
  }
})
// program 0 connected by definition
programs[0].connected = true

// recursive function to follow pipes for each program
const checkConnected = (program, seen) => {
  return program.connected || program.pipes.some(pipe => {
    if (seen.indexOf(pipe) === -1) {
      seen.push(pipe)
      if (checkConnected(programs[pipe], seen)) {
        return true
      }
      return false
    } else {
      // been here before, just return connected value
      return programs[pipe].connected
    }
  })
}

// process the programs
programs.forEach(program => {
  let seen = [program.id] // prevent infinite loops by storing programs already visited within each for loop
  program.connected = checkConnected(program, seen)
  return program.connected
})

// count 'em up
console.log(programs.filter(program => program.connected ).length)