class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // adding into a Queue
    enqueue(data) {
        const newNode = new Node(data);

        if (!this.rear) {
            this.front = this.rear = newNode;
            return;
        }

        this.rear.next = newNode
        this.rear = newNode

    }
    // Removing from a queue
    dequeue() {
        if (!this.front) {
            console.log('Queue is empty');
            return;
        }
        this.front = this.front.next;

        if (!this.front) {
            this.rear = null
        }
    }
    peek(){
        return this.front.data
    }
    // Method to print the elements of the list
    display() {
        let current = this.front;
        if (!current) {
            console.log('empty Queue');
            return;
        }
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const myQ = new queue();
myQ.enqueue(10)
myQ.enqueue(20)
myQ.enqueue(30)
console.log(myQ.peek());