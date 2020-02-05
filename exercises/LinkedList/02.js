// 2. Write a program in JS to create a singly linked list of n nodes and display it in reverse order. Go to the editor
// Test Data :
// Input the number of nodes : 3
// Input data for node 1 : 5
// Input data for node 2 : 6
// Input data for node 3 : 7
// Expected Output :

//  Data entered in the list are :                                                                               
//  Data = 5                                                                                                     
//  Data = 6                                                                                                     
//  Data = 7                                                                                                     
                                                                                                              
//  The list in reverse are :                                                                                    
//  Data = 7                                                                                                     
//  Data = 6                                                                                                     
//  Data = 5

const LinkedList = require('../../structures/LinkedList');

const list = new LinkedList();

const numbers = [5, 6, 7];

numbers.forEach( number => list.push(number) );

list.printReverse();
