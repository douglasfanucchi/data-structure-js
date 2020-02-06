const DoublyLinkedList = require('./structures/DoublyLinkedList')

const linked = new DoublyLinkedList()

linked.insert(5, 0);
linked.insert(1, 0);
linked.insert(120, linked.count);
linked.insert(99, linked.count - 1);

console.log(linked);
