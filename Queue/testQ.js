class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}



class queue {
    constructor() {
        this.front = null
        this.rear = null
    }


    enque(data) {

        const newItem = new Node(data)

        if (!this.rear) {
            this.front = this.rear = newItem;
            return
        } else {
            this.rear.next = newItem
            this.rear = newItem
        }
    }

    deQueue() {
        if (!this.front) {
            console.log('Queue is empty');
            return
        }
        this.front = this.front.next
        if (!this.front) {
            this.rear = null;
        }
    }

    peek(){
        console.log('First element is ',this.front.data);
    }

    isEmpty(){
        if(!this.front)
            console.log('Queue is not empty');
        else
        console.log('empty');
    }

    display(){
        let temp = this.front;
        if(!temp){
            return
        }
        while(temp){
            console.log(temp.data);
            temp = temp.next
        }
    }
}

const que = new queue()

que.enque(1)
que.enque(3)
que.enque(2)
que.deQueue()
que.display()
console.log(que);