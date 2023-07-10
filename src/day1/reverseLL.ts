type LLNode<T> = {
    value: T;
    next?: LLNode<T> | null;
};

function newNode<T>(val: T): LLNode<T> {
    return {
        value: val,
    };
}
// 1
function insertArrayOfElementsInLList<T>(arr: T[]): LLNode<T> {
    let pN: LLNode<T> = newNode(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        const nn = newNode(arr[i]);
        pN.next = nn;
        pN = nn;
    }
    return pN;
}


function reverseLinkedList() {
    let llHead = insertArrayOfElementsInLList([3, 455, 234, 13, 143, 1242, 89]);
    let currNode = llHead;
    let prevNode = llHead;
    let nextNode = llHead;

    while (currNode.next) {
        if (currNode === llHead) {
            currNode = currNode.next;
            prevNode.next = null;
        } else {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
    }
    if (!currNode.next) {
        currNode.next = prevNode;
        llHead = currNode;
    }
}

function printLL<T>(llHead: LLNode<T>) {
    let str = "";
    let currNode = llHead;

    if (!currNode) {
        return;
    }

    while (currNode) {
        str += currNode.value + " -> ";
        if (currNode.next) {
            currNode = currNode.next;
        }
    }
    console.log(str);
}
