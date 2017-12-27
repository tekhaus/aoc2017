const fs = require('fs')

// read input file and split on new lines to form an array
const arrPassphrases = fs.readFileSync('day4-input.txt', 'utf8').split('\n')

// map over array to find passphrases with no duplicate anagram words
const validPassphrases = arrPassphrases.map(passphrase => {
  // split passphrase into words
  const arrWords = passphrase.split(' ')
  // sort letters of each word in each passphrase to handle anagrams
  const arrSorted = arrWords.map(word => word.split('').sort().join(''))
  // check if array is same length as Set of unique words
  return arrSorted.length === (new Set(arrSorted)).size ? 1 : 0
}).reduce((sum, curr) => sum+= curr) // count 'em up

console.log(`# of valid passphrases: ${validPassphrases}`)