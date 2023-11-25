class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return !this.isEmpty() ? this.items[this.items.length - 1] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    deleteMiddle() {
        const mid = Math.floor(this.items.length / 2);
        const tempStack = new Stack();

        // Push elements from original stack to tempStack until mid
        for (let i = 0; i < mid; i++) {
            tempStack.push(this.pop());
        }

        this.pop();
        // Push back elements from tempStack to original stack
        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Original Stack:", stack.items);

stack.deleteMiddle();

console.log("Stack after deleting middle element:", stack.items);
