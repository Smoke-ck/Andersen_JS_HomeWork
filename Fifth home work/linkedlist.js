class LinkedList {

    constructor() {
        this.head = null;
    }

    append(elem) {
        const newData = {
            elem,
            next: null
        }
        newData.next = this.head;
        this.head = newData;
        return this.head;
    }

    prepend(elem) {
        const newData = {
            elem,
            next: null
        }
        if (!this.head) {
            this.head = newData;
            return this.head
        }
        let tail = this.head;
        do {
            tail = tail.next;
        } while (tail.next !== null)
        tail.next = newData;
        return this.head;

    }

       find(elem) {
        let current = this.head;
        do {
          if (elem === current.elem) {
                return current;
            }
            current = current.next;
        } while (current)     
        return null;
    }

    toArray() {
        const array = [];
        let arrayElement = this.head;
        do {
            array.push(arrayElement.elem)
            arrayElement = arrayElement.next;
        } while (arrayElement);
        return array;
    }

    static fromIterable(iterable) {
        const list = new LinkedList();
        for (let element of iterable) {
            list.append(element);
        }
        return list;
    }
}

module.exports = { LinkedList };
