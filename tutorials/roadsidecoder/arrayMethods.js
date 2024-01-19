// MAP, FILTER, AND REDUCE

// MAP
// Creates a nre array
// Returns the new array
// Applies a function to each element

const mapArray = [1, 2, 3, 4, 5, 6, 7];

const mapResult = mapArray.map((item, i, array) => item * 2);

// console.log("mapResult", mapResult)
// console.log("mapArray", mapArray)

// FILTER
// Creates a new array
// Returns a new array
// Conditionally returns each items in the new array

const filterArray = [1, 2, 3, 4, 5, 6, 7];

const filterResult = filterArray.filter((item, i, array) => {
  return item % 2 === 0
});

// console.log('filterResult', filterResult);
// console.log("filterArray", filterArray)

// REDUCE
// Reduces array of items to one item
// applies a function to each item to reduce the array 

const reduceArray = [1, 2, 3, 4, 5, 6, 7];

const reduceResult = filterArray.reduce((acc, curr, i, arr) => {
    return acc += curr
}, 0)

// console.log('reduceArray', reduceArray);
// console.log("reduceResult", reduceResult)