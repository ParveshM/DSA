class Node {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.head = null;
    }

    enqueue(element, priority) {
        const newNode = new Node(element, priority);

        // If the queue is empty or the new node has higher priority than the head
        if (!this.head || priority < this.head.priority) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;

            // Finding the position to insert the new node
            while (current.next && priority >= current.next.priority) {
                current = current.next;
            }

            newNode.next = current.next;
            current.next = newNode;
        }
    }

    dequeue() {
        if (!this.head) return null;

        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        return removedNode;
    }

    front() {
        return this.head;
    }

    isEmpty() {
        return this.head === null;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(`${current.element} - ${current.priority}`);
            current = current.next;
        }
    }
}

// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 2);
priorityQueue.enqueue('Task 4', 5);
priorityQueue.enqueue('Task 5', 4);

priorityQueue.print();
console.log('\nDequeued element' + priorityQueue.dequeue().element); 
