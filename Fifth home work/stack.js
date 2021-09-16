class Stack {
    constructor(maxSizeStack = 10) {
        this.checkNumber(maxSizeStack, 'Invalid number')
        this.maxSizeStack = maxSizeStack;
        this.curSizeStack = 0;
        this.topElement;
    }
    push(element) {

        if (this.curSizeStack == this.maxSizeStack) { this.error('Stack is full') }
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
        this.curSizeStack += 1;
    }
    pop() {
        if (this.isEmpty()) { this.error('Stack is empty') }
        const popElement = this.topElement;
        this.topElement = popElement.previos;
        this.curSizeStack -= 1;
        return popElement.element;
    }
    peek() {
        if (this.isEmpty()) { return null; }
        else {
            return this.topElement.element;
        }
    }
    isEmpty() {
        return this.curSizeStack == 0;
    }
    toArray() {

        const array = [...JSON.stringify(this.topElement).replace(/\D/g, "")].map(Number)
        return array.reverse();
    }
    static fromIterable(iterable) {
        const elements = [...iterable]
        const stack = new Stack(elements.length,);
        for (let i of elements) {
            stack.push(i);
        }
        return stack;
    }
    error(message) { throw new Error(message) }
    checkNumber(value, message) { value = (!Number.isInteger(value) ? this.error(message) : value) }
}

module.exports = { Stack };