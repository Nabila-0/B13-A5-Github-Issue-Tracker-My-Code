## 1. What is the difference between var, let, and const? 

 => The var keyword in JS is function-scoped. It returns undefined if it is used before declaration. 
 On the other hand, let and const keyword is block-scoped. As they fall into a Temporal Dead Zone, 
 they will throw an error if they are accessed before declaration.

Re-declaration is allowed with the same variable name by using the var keyword. But it is not allowed by 
using the let and const keyword.  
While the var and let keywords allow re-assignment, the const keyword does not allow re-assignment of 
declared primitive data types.

Although the value of non-primitive data type (array or object) can not be re-assigned, 
its elements can be updated by using their index and an element can be added or removed by using 
the push() or pop() methods in arrays. Similarly, propreties can be added, removed or modified in objects.



## 2. What is the spread operator (...)? 

=> The Spread operator (...), a JS feature, allows spreading elements of an object or an array. It represents by 
three dots.   
Spread operator does not change the original array or object and helps to create a new copy.  
It also helps combining or joining multiple arrays or objects and adding new elements or properties to an existing 
array or object without modifying the original one.




## 3. What is the difference between map(), filter(), and forEach()?

=> The map(), filter(), and forEach() methods are used to loop through arrays.

The filter() method is used to check every single element against a condition. It returns a new array 
containing all the passed items or elements by the condition.


The map() method goes through an array and modifies every single element. It returns a new array 
of the same length that contains the modified elements.


The forEach() method is kind of similar to the map() method. It goes through all elements of an array and performs 
an action. But it does not create a new array and returns undefined.



## 4. What is an arrow function?

=> An arrow function is a modern way to write functions in modern JavaScript (ES6). As the syntax of the function
contains an arrow (=>) like symbol, so it is called an arrow function. 

It can have one, multiple or no parameters. If there's only one parameter, the first bracket () 
can be skipped. This function is way more modern, readable and clean.

```js
//Basic syntax of an arrow function
const todoList = () => {

};
```


## 4. What are template literals?

=> Template literals are a modern way to create strings in JS. They use backticks (``) instead of using single ('')
or double ("") quotations.

Multi-line strings can be written by using this and line breaks can be directly used in it. 
Variable or expression can be embedded directly into the string and 
dynamic values also can be added by using ${}.  It makes code more readable and easy to maintain.



