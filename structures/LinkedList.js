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

        let current = this.head;

        if(position === 0) {
            this.head = new Node(element);
            this.head.next = current;
            return ++this.count;
        }

        let previous = this.getElementAt(position - 1);
        let next = previous.next;
        current = new Node(element);

        previous.next = current;
        current.next  = next;

        return ++this.count;
    }

    getElementAt(position) {
        if( position >= this.count || position < 0 )
            return -1;

        let currentIndex = 0;
        let currentNode = this.head;

        while( currentIndex++ !== position )
            currentNode = currentNode.next;

        return currentNode;
    }

    removeAt(position) {
        if( position >= this.count || position < 0 )
            return -1;

        if( position === 0) {
            this.head = this.head.next;
            return --this.count;
        }

        let previous = this.getElementAt(position - 1);
        let current  = previous.next;

        previous.next = current.next;
        return --this.count;
    }

    remove(element) {
        const index = this.getIndexOf(element);
        return this.removeAt(index);
    }

    indexOf(element) {
        let currentIndex = 0;
        let current = this.head;

        while(current !== undefined) {
            if( this.equalsFn(current.element, element) )
                return currentIndex;
            
            current = current.next;
            currentIndex++;
        }

        return -1;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    toString() {
        if( this.isEmpty() )
            return '';

        let current = this.head;
        let string = `${current.element}`;

        while( current.next !== undefined ) {
            current = current.next;
            string = `${string},${current.element}`;
        }

        return string;
    }

    print() {
        console.log( this.toString() );
    } 
}

module.exports = LinkedList
