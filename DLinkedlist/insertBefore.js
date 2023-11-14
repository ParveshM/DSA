class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DlinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail;
        }

        this.tail = newNode
    }

    addBefore(before, data) {
        const newNode = new Node(data)
        let temp = this.head
        let prev = null

        if (temp.data == before) {
            newNode.next = temp;
            temp.prev = newNode
            this.head = newNode
            return
        }

        while (temp !== null && temp.data !== before) {
            prev = temp
            temp = temp.next
        }

        newNode.prev = prev
        newNode.next = temp
        temp.prev = newNode
        prev.next = newNode
    }


    print() {
        let temp = this.tail

        while (temp) {
            console.log('temp is ', temp.data);
            temp = temp.prev
        }
    }

}

const list = new DlinkedList()
list.addNode(1)
list.addNode(5)
list.addNode(10)
list.addNode(14)
list.addBefore(1, 100)
list.print()