// If we provide a single argument, .slice() will return a copy from that index to the end of the string.

console.log('Edsger Dijkstra'.slice(7))

// If we wanted the first three characters of Dijkstra's name, we would specify 0 as the first argument, the index at which to start, and 3 as the second argument, the index before which to end:

console.log('Edsger Dijkstra'.slice(0, 3))


// Using negative indicies, we count backwards from the end, -8 is our start and -5 is our end
console.log('Edsger Dijkstra'.slice(-8));    // "Dijkstra"
console.log('Edsger Dijkstra'.slice(-8, -5)); // "Dij"

// Working with arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.slice(-3));   // [3, 4, 5]

