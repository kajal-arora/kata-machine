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
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const node = this.head;
   
        this.head = this.head.next!;
        node.next = null;
        this.length--;
        return node.value;
    }
    peek(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        return this.head.value;
    }
}
