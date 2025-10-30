function LargestNumber(arr) {
    let max = -Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
    
}

let arr = [1, 24, 6, 83, 4, 78, 93, 23]

let result = LargestNumber(arr);
console.log(result);