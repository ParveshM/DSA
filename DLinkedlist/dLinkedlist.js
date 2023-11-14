class Node {
    constructor(data) {
        this.data = data;
        this.prev = null
        this.next = null;
    }
}


class DlinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    addNode(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
    }

    print() {
        let temp = this.head;
        if (!temp) { 
            return
        }

        while (temp !== null) {
            console.log('Node data : ', temp.data);
            temp = temp.next
        }
    }
    reversePrint() {
        let temp = this.tail;
        if (!temp) {
            return
        }

        while (temp !== null) {
            console.log('Node data : ', temp.data);
            temp = temp.prev
        }
    }
}

const list = new DlinkedList()

list.addNode(1)
list.addNode(2)
list.addNode(3)

list.print()
console.log('\nafter reverse printing');
list.reversePrint()
// console.log('\nmylist',list);