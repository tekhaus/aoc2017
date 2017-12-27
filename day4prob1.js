const fs = require('fs')

// read input file and split on new lines to form an array
const arrPassphrases = fs.readFileSync('day4-input.txt', 'utf8').split('\n')

// map over array to find passphrases with no duplicate words
const validPassphrases = arrPassphrases.map(passphrase => {
  // split passphrase into words
  const arrWords = passphrase.split(' ')
  // check if array is same length as Set of unique words
  return arrWords.length === (new Set(arrWords)).size ? 1 : 0
}).reduce((sum, curr) => sum+= curr) // count 'em up

console.log(`# of valid passphrases: ${validPassphrases}`)