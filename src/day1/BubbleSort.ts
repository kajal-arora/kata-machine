export default function bubble_sort(arr: number[]): void {
    //Complexity -  O(N^2)
    // for(let i = 0 ;i<arr.length; i++) {
    //     for(let j = 0; j<arr.length; j++) {
    //         if(arr[j] > arr[j+1]) {
    //             let temp = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1] = temp;
    //         }
    //     }
    // }

    /*
    arr.length-1-i 
    - 1 = to not include the last element in the first iteration so minus 1 
    - i = every single time we execute, the last element becomes the largest, so need to redo that so minus i
    */

    for(let i = 0 ;i<arr.length; i++) {
        for(let j = 0; j<arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
