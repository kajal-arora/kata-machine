function merge_paritition(
    arr: number[],
    low: number,
    mid: number,
    high: number,
) {
    let i = low;
    let j = mid + 1;
    let k = low;
    console.log({arr,low,mid,high})
    let sortedArr = new Array();
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            sortedArr[k] = arr[i];
            i++;
        } else {
            sortedArr[k] = arr[j];
            j++;
        }
        k++;
    }
    if (i > mid) {
        while (j <= high) {
            sortedArr[k] = arr[j];
            k++;
            j++;
        }
    } else {
        while (i <= mid) {
            sortedArr[k] = arr[i];
            i++;
            k++;
        }
    }
    console.log({ sortedArr });
    for (let c = low; c <= high; c++) {
        arr[c] = sortedArr[c];
    }
}

function merge_sort_recursion(arr: number[], low: number, high: number) {
    if (low < high) {
        let mid = Math.floor((high + low) / 2);
        merge_sort_recursion(arr, low, mid);
        merge_sort_recursion(arr, mid + 1, high);
        merge_paritition(arr, low, mid, high);
    }
}

export default function merge_sort(arr: number[]): void {
    merge_sort_recursion(arr, 0, arr.length - 1);
    console.log(arr);
}

merge_sort([9, 3, 7]); //, 
