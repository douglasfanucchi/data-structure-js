// 1. Write a program in JS to create and display Singly Linked List. Go to the editor
// Test Data :
// Input the number of nodes : 3
// Input data for node 1 : 5
// Input data for node 2 : 6
// Input data for node 3 : 7
// Expected Output :

//  Data entered in the list :                                                                                   
//  Data = 5                                                                                                     
//  Data = 6                                                                                                     
//  Data = 7 

const LinkedList= require('../../structures/LinkedList');

const list = new LinkedList();

const numbers = [5, 6, 7];

numbers.forEach(number => list.push(number))

list.print();
