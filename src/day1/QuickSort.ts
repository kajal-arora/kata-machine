//divide and conquer
/*
Quicksort is one of the most efficient and commonly used sorting algorithms.
It is a divide-and-conquer algorithm. 
It’s also an in-space algorithm as it does not use any extra space for sorting the input data, unlike the merge sort algorithm.
*/

function swap(arr: number[], num1Index: number, num2Index: number) {
    let temp = arr[num1Index];
    arr[num1Index] = arr[num2Index];
    arr[num2Index] = temp;
}
function partition(arr: number[], start: number, end: number) {
    let pivot = arr[start];
    let pivotIndex = start;
    while (start < end) {
        while (arr[start] <= pivot) {
            start++;
        }
        while (arr[end] > pivot) {
            end--;
        }
        if (start < end) {
            swap(arr, start, end);
        }
    }
    swap(arr, pivotIndex, end);
    return end;
}

function quick_sort_recursion(arr: number[], low: number, high: number) {
    if (low < high) {
        let loc = partition(arr, low, high);
        quick_sort_recursion(arr, low, loc - 1);
        quick_sort_recursion(arr, loc + 1, high);
    }
}

export default function quick_sort(arr: number[]): void {
    quick_sort_recursion(arr, 0, arr.length - 1);
    console.log(arr);
}

quick_sort([9, 3, 7, 4, 69, 420, 42]);
