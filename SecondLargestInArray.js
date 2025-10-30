// Write a JavaScript function to find the second largest number in an array.

// If the array has fewer than two elements, return a message saying "Array should have at least 2 elements".

// Ignore duplicate values of the largest number (e.g., [10, 10, 5] should return 5).
function secondLargestFunc(arr) {
  if (arr.lenght < 2) {
    return "Array should have atleast 2 elements";
  }
  let SecondLargest = -Infinity;
  let FirstLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > FirstLargest) {
      SecondLargest = FirstLargest;
      FirstLargest = arr[i];
    } else if (arr[i] > SecondLargest && arr[i] != FirstLargest) {
      SecondLargest = arr[i];
    }
  }
  return SecondLargest;
}

let arr = [1, 24, 6, 83, 4, 78, 93, 23];

let result = secondLargestFunc(arr);
console.log(result);
