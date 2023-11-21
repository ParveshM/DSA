class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        const item = { element, priority };
        let added = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (item.priority < this.queue[i].priority) {
                this.queue.splice(i, 0, item);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(item);
        }
    }

    dequeue() {
        return this.queue.shift();
    }

    front() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        console.log(this.queue.map(item => `${item.element} - ${item.priority}`).join(', '));
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 2);
priorityQueue.enqueue('Task 4', 5);
priorityQueue.enqueue('Task 5', 4);

priorityQueue.print(); 

console.log(priorityQueue.dequeue()); 
