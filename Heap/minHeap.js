class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getRightChild(index) {
        return 2 * index + 2;
    }

    getLeftChild(index) {
        return 2 * index + 1;
    }

    hasParent(index) {
        return this.getParent(index) >= 0;
    }

    hasLeftChild(index) {
        return this.getLeftChild(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChild(index) < this.heap.length;
    }

    display() {
        return this.heap
    }

    peek() {
        return this.heap[0]
    }

    remove() {
        if (!this.heap.length) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        this.heap[0] = this.heap.pop();
        if (this.heap.length > 0) {
            this.heapify(0);    
        }
    }

    heapify(index) {
        let smallest = index;
        const leftChild = this.getLeftChild(index);
        const rightChild = this.getRightChild(index);
        if (this.hasLeftChild(index) && this.heap[smallest] > this.heap[leftChild]) {
            smallest = leftChild;
        }
        if (this.hasRightChild(index) && this.heap[smallest] > this.heap[rightChild]) {
            smallest = rightChild;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapify(smallest);
        }
    }


    heapifyUp(index) {
        let currIdx = index;
        while (this.hasParent(currIdx) && this.heap[currIdx] < this.heap[this.getParent(currIdx)]) {
            [this.heap[currIdx], this.heap[this.getParent(currIdx)]] = [this.heap[this.getParent(currIdx)], this.heap[currIdx]];
            currIdx = this.getParent(currIdx);
        }
    }

    add(num) {
        this.heap.push(num);
        this.heapifyUp(this.heap.length - 1);
    }


    buildHeap(elements) {
        this.heap = elements
        for (let i = this.getParent(this.heap.length - 1); i >= 0; i--) {
            this.heapify(i);
        }
    }
}

const arr = [15, 10, 5, 20, 7, 3, 2]
const heap = new MinHeap()
// heap.buildHeap(arr)
heap.add(6)
heap.add(2)
heap.add(8)
heap.add(1)
heap.add(5)
heap.add(15)

console.log('valuse are', heap.display());
heap.remove()
console.log('\nPeek is', heap.peek());
console.log('\nAfter removing ', heap.display());