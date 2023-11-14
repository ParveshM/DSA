class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
    }


    addNode(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return;
        }

        this.tail.next = newNode
        this.tail = newNode

    }

    bubbleSort() {
        let swapped;
        do {
            swapped = false;
            let current = this.head;
            let next = current.next;

            // loop runs untill next element is null
            while (next !== null) {
                if (current.data > next.data) {
                    [current.data, next.data] = [next.data, current.data];
                    swapped = true;
                }
                current = next;
                next = current.next;
            }

        } while (swapped);
    }


    print() {
        let temp = this.head
        if (!temp) {
            console.log('No head');
            return
        }
        while (temp) {
            console.log('Data is: ', temp.data);
            temp = temp.next
        }
    }
}

const list = new linkedList();


list.addNode(100)
list.addNode(10)
list.addNode(15)
list.addNode(101)
console.log('\nBefore sorting ');
list.print()

list.bubbleSort()

console.log('\nAfter sorting ');
list.print()