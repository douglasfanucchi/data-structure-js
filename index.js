const LinkedList = require('./structures/LinkedList')

const linked = new LinkedList()

linked.push('Douglas');
linked.push('de Lima');
linked.push('Fanucchi');

linked.removeAt(0);

linked.insert('Felipe', 3);

linked.print();
