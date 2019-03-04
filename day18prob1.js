const fs = require('fs')
const input = fs.readFileSync('day18-input.txt', 'utf8').split('\n')
// const instructions = [...input]

const assembly = {}
const sounds = []
let recovery = 0
let index = 0

// set a 1
// add a 2
// mul a a
// mod a 5
// snd a
// set a 0
// rcv a
// jgz a -1
// set a 1
// jgz a -2

const instSet = (register, value) => assembly.register = value
const instAdd = (register, value) => assembly.register+= value
const instMultiply = (register, value) => assembly.register*= value
const instRemainder = (register, value) => assembly.register%= value
const instSound = register => sounds.push(assembly.register)
const instRecover = register => assembly.register > 0 ? assembly.register : null
const instJump = (register, offset) => assembly.register > 0 ? index=+ offset : index++

while (index > -1 && index < input.length) {
  let [instruction, register, value] = input[index].split(' ')
  switch (instruction) {
    case 'set':
      instSet(register, value)
      index++
      break
    case 'add':
      instAdd(register, value)
      index++
      break
    case 'mul':
      instMultiply(register, value)
      index++
      break
    case 'mod':
      instRemainder(register, value)
      index++
      break
    case 'snd':
      instSound(register)
      index++
      break
    case 'rcv':
      recovery = instRecover(register)
      index++
      break
    case 'jgz':
      instJump(register, value)
      break
  }
}
