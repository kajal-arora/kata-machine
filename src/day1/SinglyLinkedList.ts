// In LL, compelexity counts for traversal + operations as well
// Node contains { value: T, next: Node}
type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class SinglyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        if (!this.head) {
            // no element exists
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            //where head and tail points to same node, update tail
            if (this.head === this.tail) {
                this.tail = node.next;
            }
            this.head = node;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        const node = { value: item } as Node<T>;

        if (idx === 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        let counter = 0;
        let left = this.head;
        let right = this.head;

        while (counter < idx) {
            left = right;
            right = left?.next;
            counter++;
        }

        if (left) {
            left.next = node;
        }
        if (right) {
            node.next = right;
        }
        this.length++;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        let currNode = this.head;
        let prevNode = this.head;
        while (currNode) {
            if (currNode.value === item) {
                if (currNode === this.head) {
                    this.head = currNode.next;
                }
                if (prevNode) {
                    prevNode.next = currNode.next;
                }
                this.length--;
                return item;
            }
            prevNode = currNode;
            currNode = currNode.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx < 0) {
            return undefined;
        }
        let counter = 0;
        let currNode = this.head;
        while (currNode) {
            if (counter === idx) {
                return currNode.value;
            }
            counter++;
            currNode = currNode.next;
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0) {
            return undefined;
        }
        let currNode = this.head;
        let prevNode = this.head;
        let counter = 0;

        while (currNode) {
            if (counter === idx) {
                this.length--;
                if (idx === 0) {
                    this.head = this.head?.next;
                    return currNode.value;
                } else {
                    if (prevNode) {
                        prevNode.next = currNode.next;
                    }

                    return currNode?.value;
                }
            }
            counter++;
            prevNode = currNode;
            currNode = currNode.next;
        }
        return undefined;
    }
}

// const list = new SinglyLinkedList();
// list.append(5);
// list.append(7);
// list.append(9);
// console.log("********", list.removeAt(1), "********");
// list.append(11);
// console.log(list.removeAt(1));
// console.log(list.remove(9));
// console.log(list.removeAt(0));
// console.log(list.removeAt(0));

// list.prepend(5);
// list.prepend(7);
// list.prepend(9);
// print(list?.head!);
// console.log(list.get(2));
// console.log(list.remove(9));
// print(list?.head!);
// console.log(list.length);
// // ll.prepend(4);
// // ll.append(1);
// // ll.prepend(6);
// // ll.insertAt(18, 2);
// // console.log("get", ll.removeAt(2));
// // print(ll.head!);

// function print<T>(head: Node<T>) {
//     let str: string = "";
//     let curr: Node<T> | undefined = head;
//     if (!curr) return console.log("Undefined");
//     while (curr) {
//         str += curr.value + "->";
//         curr = curr.next;
//     }
//     console.log(str);
// }
