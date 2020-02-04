const LinkedList = require('./structures/LinkedList')

const linked = new LinkedList()

linked.push('Douglas');
linked.push('de Lima');
linked.push('Fanucchi');

console.log( linked.indexOf('de Lima') );

linked.print();
