
class Stack {
    constructor(maxSize = 10) {
        this.checkNumber(maxSize, 'Invalid number')
        this.maxSize = maxSize;
        this.curSize = 0;
        this.topElement;
    }
    push(element) {
        if (this.curSize == this.maxSize) {
            this.error('Stack is full')
        }
        const data = {
            element,
            previos: null,
        };

        if (!this.topElement) {
            this.topElement = data;
        } else {
            data.previos = this.topElement;
            this.topElement = data;
        }
        this.curSize += 1;
    }
    pop() {
        if (this.isEmpty()) {
            this.error('Stack is empty')
        }
        const popElement = this.topElement;
        this.topElement = popElement.previos;
        this.curSize -= 1;
        return popElement.element;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.topElement.element;
        }
    }
    isEmpty() {
        return this.curSize == 0;
    }
    toArray() {

        const array = [];
        let arrayElement = this.topElement;

        do {
            array.push(arrayElement.element)
            arrayElement = arrayElement.previos;
        } while (arrayElement);

        return array.reverse();
    }
    static fromIterable(iterable) {
        const elements = [...iterable]
        const stack = new Stack();
        for (let i of elements) {
            stack.push(i);
        }
        return stack;
    }
    error(message) { throw new Error(message) }
    checkNumber(value, message) { value = (!Number.isInteger(value) ? this.error(message) : value) }
}

module.exports = { Stack };
