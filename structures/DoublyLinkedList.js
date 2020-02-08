const LinkedList = require('./LinkedList');
const { DoublyNode } = require('../models/linked-list-models');
const { defaultEquals } = require('../utils');

class DoublyLinkedList extends LinkedList {
    constructor(defaultFn = defaultEquals) {
        super(defaultFn);
        this.tail = undefined;
    }

    insert(element, index) {
        if( index < 0 || index > this.count )
            return undefined;

        if( index === 0 && this.head === undefined) {
            this.count++;
            return this.tail = this.head = new DoublyNode(element);
        } else if(index === 0) {

            const next = this.head;
            this.head = new DoublyNode(element);
            this.head.next = next;
            next.prev = this.head;

            this.count++;

            return this.head;
        } else if( index === this.count ) {
            const prev = this.tail;
            this.tail = new DoublyNode(element);
            prev.next = this.tail;
            this.tail.prev = prev;
            
            this.count++;

            return this.tail;
        }

        const prev = this.getElementAt(index - 1);

        const { next } = prev;

        const current = new DoublyNode(element);
        current.prev = prev;
        current.next = next;

        next.prev = current;
        prev.next = current;

        return current;
    }

    removeAt(index) {
        if( index >= this.count || index < 0 )
            return -1;

        let current, prev, next;

        if( index === 0 && this.count === 1) {
            this.head = undefined;
            this.tail = undefined;

            return --this.count;
        } else if( index === 0 ) {
            this.head = this.head.next;
            this.head.prev = undefined;

            return --this.count;
        }

        current = this.getElementAt(index);
        prev    = current.prev;
        next    = current.next;

        prev.next = next;
        next.prev = prev;
        return --this.count;
    }
}

module.exports = DoublyLinkedList;
