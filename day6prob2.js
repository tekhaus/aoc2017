let memoryState = [5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]
let pastStates = new Set([memoryState.join('-')])
let seenBefore = 0

// run cycles until duplicate memory state occurs
while (seenBefore < 2) {
  let maxBlocks = Math.max(...memoryState)
  // find first value that matches highest number of blocks
  let index = memoryState.indexOf(maxBlocks)
  // remove all blocks at index
  memoryState[index] = 0
  // distribute blocks clockwise
  while (maxBlocks > 0) {
    index = (index + 1) % memoryState.length
    memoryState[index]++
    maxBlocks--
  }
  // check for existing memoryState, otherwise add to set
  if (pastStates.has(memoryState.join('-'))) {  
    seenBefore++
    // clear the set on the first reccurence only so infinite loop cycles can be counted
    if (seenBefore === 1) {
      pastStates.clear()
      pastStates.add(memoryState.join('-'))
    }
  } else {
    pastStates.add(memoryState.join('-'))
  }
}

console.log(`cycles before duplicate: ${pastStates.size}`)