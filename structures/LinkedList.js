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

    insert(element, position) {
        if( position > this.count || position < 0 )
            return -1;

        let currentIndex = 0;
        let currentNode  = this.head;

        if(position === currentIndex) {
            this.head = new Node(element);
            this.head.next = currentNode;
            return ++this.count;
        }

        let nextPosition = currentIndex + 1;

        while( nextPosition < position ) {
            currentNode = currentNode.next;
            nextPosition++;
        }

        if( currentNode.next !== undefined ) {
            const { next } = currentNode;
            currentNode.next = new Node(element);
            currentNode = currentNode.next;
            currentNode.next = next;
            return ++this.count;
        }

        currentNode.next = new Node(element);
        return ++this.count;
    }

    getElementAt(position) {
        if( position >= this.count || position < 0 )
            return -1;

        let currentIndex = 0;
        let currentNode = this.head;

        while( currentIndex++ !== position )
            currentNode = currentNode.next;

        return currentNode.element;
    }

    removeAt(position) {
        if( position >= this.count || position < 0 )
            return -1;

        let currentIndex = 0;

        if( position === 0 && this.head.next !== undefined) {
            this.head = this.head.next;
            return --this.count;

        } else if( position === 0 ) {
            this.head = undefined;
            return --this.count;
        }

        let currentNode = this.head;
        let previous;

        while( currentIndex++ < position ) {
            previous    = currentNode;
            currentNode = currentNode.next;
        }

        previous.next = currentNode.next;
        return --this.count;
    }

    remove(element) {
        let currentNode  = this.head;

        if( currentNode.element === element && currentNode.next === undefined) {
            this.head = undefined;
            return --this.count;
        } else if(currentNode.element === element) {
            this.head = currentNode.next;
            return --this.count;
        }

        while( currentNode.next !== undefined && !this.equalsFn(currentNode.next.element, element) )
            currentNode = currentNode.next;

        if( !currentNode.next )
            return -1;

        let previous = currentNode;
        currentNode = currentNode.next;
        previous.next = currentNode.next;

        return --this.count;
    }

    print() {
        let currentNode = this.head;

        while(currentNode !== undefined) {
            console.log( currentNode.element );
            currentNode = currentNode.next;
        }
    } 
}

module.exports = LinkedList
