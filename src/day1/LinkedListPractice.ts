type LNode = { value: number; next: null | LNode };

function NewNode(value: number): LNode {
    return {
        value,
        next: null,
    };
}

let head = NewNode(1);

function printLLElements(head: LNode) {
    let str = "";
    let curr: LNode | null = head;
    if (!curr) {
        return console.log("Empty LL");
    }
    while (curr) {
        str += curr.value + "->";
        curr = curr.next;
    }
    console.log(str);
}

// waf insert 10 elements given as array to this head
// [3, 5, 7 ,9, 13, 18, 19, 88, 91, 3, 5, 77]
function insertArrayOfElementsInLL(arr: number[]) {
    let prevNode = head;
    for (let i = 0; i < arr.length; i++) {
        const newNode = NewNode(arr[i]);
        prevNode.next = newNode;
        prevNode = newNode;
    }

    printLLElements(head);
}

insertArrayOfElementsInLL([3, 5, 7, 9, 13, 18, 19, 88, 91, 3, 5, 77]);

// waf which will find the node with given value (18)
// returns left and right nodes value as a tuple

function findByValue(value: number): [number | null, number | null] | string {
    let currNode: LNode | null = head;
    let prevNode;
    if (!currNode) {
        return "Empty linked list";
    }
    while (currNode) {
        if (currNode.value === value) {
            if (prevNode && currNode.next) {
                return [prevNode.value, currNode.next.value];
            } else if (currNode.next) {
                return [null, currNode.next.value];
            } else if (prevNode) {
                return [prevNode.value, null];
            }
        } else {
            prevNode = currNode;
            currNode = currNode.next;
        }
    }
    return "Value not found";
}

// console.log(findByValue(77));

// waf which will insert a node with value (value, index) in ll
function insertAt(value: number, idx: number) {
    const newNode = NewNode(value);
    let counter = 0;
    let currNode: LNode | null = head;
    let prevNode: LNode | null = head;
    printLLElements(head);
    if (!currNode) {
        return console.log("Empty Linked List");
    }
    if (idx === 0) {
        newNode.next = head;
        head = newNode;
    } else {
        while (counter < idx) {
            prevNode = currNode;
            // 0 1 // 1 3 // 2 5 // 3 7
            if (currNode) {
                currNode = currNode?.next;
            }
            counter++;
        }
        if (prevNode) {
            prevNode.next = newNode;
            newNode.next = currNode;
        }

        // }
    }
    printLLElements(head);
}
// insertAt(12, 0);
// insertAt(14, 6);
// insertAt(2324, 5);

// waf which will print the alternate values
function printAlternateValues(head: LNode, printEvenIdx: boolean) {
    let currNode: LNode | null = head;
    let str = "";
    let counter = 0;
    if (!currNode) {
        console.log("Empty LL");
    }
    //1st approach
    // while (currNode) {
    //     str+= currNode?.value +  " -> ";
    //     if(currNode?.next) {
    //         currNode = currNode.next?.next;
    //     }
    //     else {
    //         currNode = currNode.next
    //     }
    // }
    //2nd approach enhanced with odd even
    while (currNode) {
        if (printEvenIdx && counter % 2 == 0) {
            str += currNode?.value + " -> ";
        } else if (!printEvenIdx && counter % 2 != 0) {
            str += currNode?.value + " -> ";
        }
        currNode = currNode.next;
        counter++;
    }
    console.log(str);
}
// printAlternateValues(head, true); // print even idx values
// printAlternateValues(head, false);

// waf which returns second and second last value
function printSecondAndSecondLastValue(head: LNode) {
    let currNode: LNode | null = head;
    let counter = 1;
    if (!currNode) {
        return console.log("Empty LL");
    }

    while (currNode) {
        if (counter == 2) {
            console.log("Second Item", currNode.value);
        }
        if (!currNode.next?.next) {
            console.log("Second Last Item", currNode.value);
            break;
        }
        currNode = currNode.next;
        counter++;
    }
}
// printSecondAndSecondLastValue(head);

// waf which will delete a value from and index and update the ll
// and returns the value which was deleted
function deleteItemByIndex(head: LNode, idx: number): number | string {
    if (idx < 0) {
        return "Invalid idx";
    }

    let counter = 0;
    let currNode: LNode | null = head;
    let prevNode: LNode | null = head;
    if (!currNode) {
        return "Empty list";
    }
    if (idx === 0) {
        head = currNode.next!;
        printLLElements(head);
        return prevNode?.value;
    }
    while (currNode) {
        if (counter === idx) {
            prevNode.next = currNode.next;
            printLLElements(head);
            return currNode.value;
        }
        prevNode = currNode;
        currNode = currNode.next;
        counter++;
    }
    return "Not found";
}
// console.log("Deleted Value at 0 index", deleteItemByIndex(head, 0));
// console.log("Deleted Value at unknown idx", deleteItemByIndex(head, 67));
// console.log("Deleted Value in middle", deleteItemByIndex(head, 5));

//waf which will delete item by value and return index and update LL
function deleteItemByValue(head: LNode, value: number): number | string {
    let currNode: LNode | null = head;
    let prevNode: LNode | null = head;
    let counter = 0;

    if (!currNode) {
        return "Empty ll";
    }
    while (currNode) {
        if (currNode.value === value) {
            prevNode.next = currNode.next;
            if (counter == 0) {
                head = currNode.next!;
            }
            printLLElements(head);
            return counter;
        }
        counter++;
        prevNode = currNode;
        currNode = currNode.next;
    }
    return "Not Found";
}

// console.log("Deleted Value Index", deleteItemByValue(head, 7));

// waf which will get delete alternate values from ll
function deleteAlternateValues(head: LNode) {
    let currNode: LNode | null = head;
    let counter = 0;

    if (!currNode) {
        return console.error("Empty LL");
    }
    while (currNode) {
        if (counter % 2 === 0) {
            if (counter == 0) {
                head.next = currNode.next?.next!;
            } else {
                currNode.next = currNode.next?.next!;
            }
        } else {
            currNode = currNode.next;
        }
        counter++;
    }
    printLLElements(head);
}
// deleteAlternateValues(head);

// waf which will reverse the remaining ll
// function reverseLL(head: LNode) {
//     let currNode: LNode | null = head;
//     let prevNode: LNode | null = head;

//     if (!currNode) {
//         return console.error("Empty LL");
//     }

//     while (currNode) {
//         if (currNode === head && prevNode) {
//             currNode = currNode.next;
//             prevNode.next = null;
//         } else {
//             if (currNode.next) {
//                 let nn: LNode = currNode.next;
//                 currNode.next = prevNode;
//                 prevNode = currNode;
//                 currNode = nn;
//             } else {
//                 head = currNode;
//                 head.next = prevNode;
//                 break;
//             }
//         }
//     }
//     printLLElements(head);
// }

function reverseLL(head: LNode) {
    let currNode: LNode | null = head;
    let prevNode: LNode = head;
    let nextNode: LNode | null = head;

    if (!currNode) {
        return console.error("Empty LL");
    }

    while (currNode.next) {
        if (currNode === head && prevNode) {
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
        head = currNode;
        head.next = prevNode;
    }
    printLLElements(head);
}

reverseLL(head);
