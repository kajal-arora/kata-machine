type SNode<T> = {
    value: T;
    next: SNode<T> | null;
};

export default class Stack<T> {
    //LIFO add and remove at head - O(1)
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node: SNode<T> = { value: item, next: null };
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const node = this.head;
        this.head = node.next!;
        node.next = null;

        this.length--;
        
        return node.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

const s = new Stack();

s.pop();
s.pop();
s.pop();
console.log(s.length);