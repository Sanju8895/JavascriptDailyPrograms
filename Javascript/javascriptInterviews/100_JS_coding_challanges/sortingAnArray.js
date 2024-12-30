// Q:- Write a function to sort an array of number in an ascending order.

// Requirment:
// The function should take an array of numbers as input 
// It should return a new array with the number sorted in ascending order
// The original aaray should remain unchanged.
// You are not allowed to use the build-in sort() methord


let arr = [5, 3, 1, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); // Output: [1, 3, 5, 8]