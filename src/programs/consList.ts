type CList = [number, CList | null];

const sdf: CList = [1, [2, [3, [4, [5, null]]]]];

function createClist(arr: number[]) {
    let ll: CList = [arr[0], null];
    createItem(arr, 1, ll);
    console.log(ll);
    printValues(ll);
    findElementsBetweenMatchingParentValues(ll);
}

function createItem(arr: number[], idx: number, myList: CList) {
    if (idx === arr.length) return;
    const el: CList = [arr[idx], null];
    myList[1] = el;
    idx++;
    createItem(arr, idx, myList[1]);
}

function printValues(cList: CList) {
    let arr = [];
    while (cList[1]) {
        arr.push(cList[0]);
        cList = cList[1];
    }
    arr.push(cList[0]);
    console.log(arr);
}

createClist([6, 1, 2, 3, 4, 5, 6]);

// parent node 6
// child node find value === parent (print remaining)
// 1,2,3,4,5

function findElementsBetweenMatchingParentValues(myList: CList | null) {
    if (!myList) return;
    const parentValue = myList[0];
    myList = myList[1];
    let values = [];
    while (myList !== null && myList[0] !== parentValue && myList[1] !== null) {
        values.push(myList[0]);
        myList = myList[1];
    }
    console.log({ values });
}

function findElements(list: CList | null, result: number[], head?: number) {
    if (list === null) return;
    if (head === list[0]) return;
    if (!head) {
        findElements(list[1], result, list[0]);
    }  else {
        result.push(list[0]);
        findElements(list[1], result, head)
    }
}

function main() {
    const cList: CList = [5, [4, [3, [2, [ 5, null ]]]]];
    const result: number[] = [];
    findElements(cList, result);
    console.log("karan =>", result);
}

main();
