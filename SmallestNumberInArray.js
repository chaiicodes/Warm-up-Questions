function SmallestNumber(arr) {
    let min = +Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <min) {
            min = arr[i];
        }
    }
    return min;
    
}

let arr = [1, 24, 6, 83, 4, 78, 93, 23]

let result = SmallestNumber(arr);
console.log(result);