export default function bs_list(haystack: number[], needle: number): boolean {
    // with recursion
    /*   if (haystack.length === 0) {
        return false;
    }
    let middle = Math.floor(haystack.length / 2);
    if (haystack[middle] === needle) {
        return true;
    }
    else if (haystack[middle] < needle) {
        let left = middle + 1;
        let newArr = haystack.slice(left);
        return bs_list(newArr, needle);
    } else {
        let right = middle;
        let newArr = haystack.slice(0, right);
        return bs_list(newArr, needle);
    }
*/

    //without recursion
    let low = 0;
    let high = haystack.length;

    do {
        let middle = Math.floor(low + (high - low)/2);
        let midValue = haystack[middle];

        if(needle === midValue) {
            return true;
        }
        else if(needle > midValue) {
            low = middle + 1;
        }
        else {
            high = middle; // as end value is not inclusive
        }

    } while (low < high);

    return false;
}