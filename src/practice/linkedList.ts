type LLdNode<T> = {
    value: T;
    next?: LLdNode<T>;
};

//without recursion
// class LinkedList<T> 
//     public length: number;
//     public head?: LLdNode<T>;
//     private tail?: LLdNode<T>;

//     constructor() {
//         this.length = 0;
//         this.head = this.tail = undefined;
//     }

//     addElement(value: T) {
//         const newNode = { value } as LLdNode<T>;
//         // first element
//         if (this.length === 0 && !this.head) {
//             this.head = this.tail = newNode;
//         } else {
//             if (this.tail) {
//                 this.tail.next = newNode;
//                 this.tail = newNode;
//             }
//         }
//         this.length++;
//     }

//     pop() {
//         if(!this.head) {
//             console.log("No elements");
//         }
//         else {
//             let currNode = this.head;
//             let prevNode = this.head;

//             while(currNode.next != null) {
//                 prevNode = currNode;
//                 currNode = currNode?.next;
//             }
//             prevNode.next=undefined;
//             this.tail = prevNode;
//             // this.tail.next = null;
//             this.length--;
//         }
//     }

//     printELement() {
//         let node = this.head as LLdNode<T>;
//         if (!node) {
//             return console.log("Empty LL");
//         }
//         while (node.next) {
//             console.log(node?.value);
//             node = node.next;
//         }
//     }
// }

// const ll = new LinkedList();
// ll.addElement(1);
// ll.addElement(2);
// ll.printELement();
// console.log("pop");
// ll.pop();
// ll.printELement();

//with recursion

function pushRecursive<T>(nhead: LLdNode<T> | null, data: T): LLdNode<T> {
    console.log({ data });
    if (!nhead) {
        let newNode: LLdNode<T> = { value: data, next: undefined };
        return newNode;
    }
    if (nhead.next) {
        nhead.next = pushRecursive(nhead.next, data);
    }
    return nhead;
}

function traverseRecursive(nhead: LLdNode<number>) {
    if(nhead.next) {
        console.log(nhead.value);
        nhead = nhead.next;
        traverseRecursive(nhead);
    }
    return;
}

function newNode<T>(value: T) {
    return { value, next: undefined };
}

function pushRecursively<T>(head: LLdNode<T> | undefined, value: T): LLdNode<T> {
    if (!head) {
        return newNode(value);
    }
    if (!head.next) {
        head.next = { value, next: undefined };
        return head;
    }
    pushRecursively(head.next, value);
    return head;
}

let llhead = undefined;
llhead = pushRecursively(llhead, 2);
pushRecursively(llhead, 4);
pushRecursively(llhead, 6);
console.log(llhead);
traverseRecursive(llhead!);
