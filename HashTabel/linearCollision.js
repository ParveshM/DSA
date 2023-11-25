class HandlingLinearCollision {
    constructor(size) {
        this.array = new Array(size);
    }

    hashing(key) {
        let total = 0;
        for (const char of key) {
            let value = char.charCodeAt();
            total = (total + value) % this.array.length;
        }
        return total;
    }

    set(key, val) {
        const index = this.hashing(key);
        let startIndex = index;

        if (!this.array[index]) {
            this.array[index] = [[key, val]];
            return;
        } else {
            // checking for any space to insert element after the index
            while (startIndex < this.array.length) {
                if (!this.array[startIndex]) {
                    this.array[startIndex] = [[key, val]];
                    return;
                }
                startIndex++;
            }
            // checking for any space to insert element before the index
            startIndex = 0;
            while (startIndex < index) {
                if (!this.array[startIndex]) {
                    this.array[startIndex] = [[key, val]];
                    return;
                }
                startIndex++;
            }
        }
        console.log('Hash table is full. Unable to insert.');
    }

    get(key) {
        const index = this.hashing(key);
        let startIndex = index;

        while (startIndex < this.array.length) {
            if (this.array[startIndex] && this.array[startIndex][0][0] === key) {
                return this.array[startIndex][0][1];
            }
            startIndex++;
        }
        startIndex = 0;
        while (startIndex < index) {
            if (this.array[startIndex] && this.array[startIndex][0][0] === key) {
                return this.array[startIndex][0][1];
            }
            startIndex++;
        }
        return 'No keys found';
    }
}

const table = new HandlingLinearCollision(5);
table.set('apple', 10);
table.set('eppla', 100);
table.set('orange', 20);
table.set('banana', 30);
table.set('lichy', 300);
console.log(table.array);
console.log(table.get('apple')); // Output: 10
console.log(table.get('eppla')); // Output: 100
