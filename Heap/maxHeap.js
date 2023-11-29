class maxHeap {
    constructor() {
        this.heap = []
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return 2 * index + 1
    }

    getRightChild(index) {
        return 2 * index + 2
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


    remove() {
        this.heap[0] = this.heap.pop();
        if (this.heap.length > 0) {
            this.heapifyDown(0);
        }
    }

    peek() {
        return this.heap[0]
    }

    heapifyDown(currIdx) {
        let largest = currIdx;
        const leftChild = this.getLeftChild(currIdx);
        const rightChild = this.getRightChild(currIdx);

        if (this.hasLeftChild(currIdx) && this.heap[largest] < this.heap[leftChild]) {
            largest = leftChild;
        }

        if (this.hasRightChild(currIdx) && this.heap[largest] < this.heap[rightChild]) {
            largest = rightChild;
        }

        if (largest !== currIdx) {
            [this.heap[largest], this.heap[currIdx]] = [this.heap[currIdx], this.heap[largest]];
            // Recursively call this function for searching elements
            this.heapifyDown(largest);
        }
    }


    heapfiyUp(index) {
        let currIdx = index;
        // Continue swapping until reaching the root or no violation
        while (this.hasParent(currIdx) && this.heap[currIdx] > this.heap[this.getParent(currIdx)]) {
            [this.heap[currIdx], this.heap[this.getParent(currIdx)]] = [this.heap[this.getParent(currIdx)], this.heap[currIdx]];
            currIdx = this.getParent(currIdx);
        }
    }


    add(val) {
        this.heap.push(val)
        this.heapfiyUp(this.heap.length - 1)
    }

    buildHeap(elements) {
        this.heap = elements
        for (let i = this.getParent(this.heap.length - 1); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    display() {
        return this.heap
    }


}
const arr = [23, 45, 12, 87]
const heap = new maxHeap()
heap.add(6)
heap.add(2)
heap.add(8)
heap.add(1)
heap.add(5)
heap.add(15)
console.log('ddd', heap.display());
// heap.remove()
console.log(heap.peek());
console.log('\nAfter removed', heap.display());

