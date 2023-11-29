class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return (i * 2) + 1;
    }

    rightChild(i) {
        return (i * 2) + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    // move down the elements that are greater than it's parent
    shiftDown(currIndx) {
        let endIdx = this.heap.length - 1;
        let leftIdx = this.leftChild(currIndx);

        while (leftIdx <= endIdx) { 
            let rightIdx = this.rightChild(currIndx)
            let indxToShift;

            if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
                indxToShift = rightIdx
            } else {
                indxToShift = leftIdx
            }

            if (this.heap[currIndx] > this.heap[indxToShift]) {
                this.swap(currIndx, indxToShift);
                currIndx = indxToShift;
                leftIdx = this.leftChild(currIndx);
            } else {
                return;
            }
        }
    }

    // move up values to the top if parent is greater than child 
    shiftUp(currIndx) {
        let parentIdx = this.parent(currIndx);
        while (currIndx > 0 && this.heap[parentIdx] > this.heap[currIndx]) {
            this.swap(currIndx, parentIdx)
            currIndx = parentIdx
            parentIdx = this.parent(currIndx)
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        this.swap(0, this.heap.length - 1);
        this.heap.pop()
        this.shiftDown(0)
    }

    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }

    display() {
        return this.heap
    }
}

const heap = new MinHeap()

heap.insert(6)
heap.insert(2)
heap.insert(8)
heap.insert(1)
heap.insert(5)
heap.insert(15)

console.log('valuse are', heap.display());
heap.remove()
console.log('\nPeek is', heap.peek());
console.log('\nAfter removing ', heap.display());