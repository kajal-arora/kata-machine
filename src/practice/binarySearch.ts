const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const num: number = 10;

function BinarySearch(arr: number[], num: number): number {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        // let mid = Math.floor(low + (high - low)/2);
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

let foundIndex = BinarySearch(arr, num);
console.log("test", foundIndex);
