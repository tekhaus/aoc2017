const input = 289326
let gridSide = 1

// find the next odd square that is greater than the input such that the input will exist on the outer grid
while (Math.pow(gridSide, 2) < input) {
  gridSide+= 2;
}

// get the highest square value
const lastSquare = Math.pow(gridSide, 2)
// add 4 corner values of outer grid to array
const corners = [lastSquare, lastSquare - (gridSide - 1), lastSquare - (2 * (gridSide - 1)), lastSquare - (3 * (gridSide - 1))]
// map to new array of absolute distances from input to corner values
const distances = corners.map(square => Math.abs(square - input))
// steps to outer corner of grid (i.e. max distance) minus the closest corner distance
const steps = (gridSide - 1) - Math.min(...distances)

console.log(steps)
