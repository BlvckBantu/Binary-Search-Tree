function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor(leftIndex + rightIndex) / 2;
        /*Math.floor is a static method that always rounds up and returns 
        the largest integer less than or equal to  a given number.*/

        if(target === arr[middleIndex]) {
            return middleIndex;
        }

        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));