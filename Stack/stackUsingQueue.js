class StackUsingQueue {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(element) {
        this.queue2.push(element);

        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }

        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.queue1.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue1[0];
    }

    isEmpty() {
        return this.queue1.length === 0;
    }
}

// Example usage
const stack = new StackUsingQueue();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.queue1);
console.log("Top element:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Is the stack empty?", stack.isEmpty());
