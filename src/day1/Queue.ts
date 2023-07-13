type LNode<T> = {
    value: T;
    next?: LNode<T>;
};
export default class Queue<T> {
    //FIFO O(1) Operations like insertion or deletion in a queue take constant time i.e., O(1). Insertion happens at tail (from end) while deletion happens at head.
    public length: number;
    private head?: LNode<T>;
    private tail?: LNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as LNode<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;    
        }
        
    }

    //removing element from first
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;// free

        if(this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
