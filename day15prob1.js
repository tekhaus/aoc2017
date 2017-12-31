const startA = 512
const startB = 191
const factorA = 16807
const factorB = 48271
const modulous = 2147483647
const pairs = 40000000

let matches = 0
let currentA = startA
let currentB =  startB

for (let i of Array(pairs).keys()) {
  if (i % 1000000 === 0) console.log(`processed ${i / 1000000} mil pairs`)
  currentA = (currentA * factorA) % modulous
  currentB = (currentB * factorB) % modulous
  // convert to binary string and compare last 16 digits only
  if ((currentA).toString(2).slice(-16) === (currentB).toString(2).slice(-16)) matches++
}

console.log(`number of matches in ${pairs / 1000000} mil pairs: ${matches}`)