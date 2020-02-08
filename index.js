const DoublyLinkedList = require('./structures/DoublyLinkedList')

const linked = new DoublyLinkedList()

linked.insert(5, 0);
linked.insert(5, 1);
linked.insert(120, 1);
linked.insert(99, 10);

linked.print();
