const { defaultEquals } = require('../utils');
const { Node } = require('../models/linked-list-models')

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.equalsFn = equalsFn;
        this.head = undefined;
    }

    push(element) {
        const node = new Node(element);

        if (this.head === undefined) {
            this.head = node;
            return ++this.count;
        }

        let current = this.head;

        while (current.next !== undefined)
            current = current.next;

        current.next = node;
        return ++this.count;
    }
}

module.exports = LinkedList
