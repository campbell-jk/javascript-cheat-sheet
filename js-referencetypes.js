//  Objects //

//  --------  //

//  There are 2 ways to work with the object's properties:

//  //  Dot Notation
person.name = "John";
//  //  //  We can change the property of an object by using . between the two.
console.log(person.name);
//  //  //  You can also use this format to log the specific property rather than the parent variable

//  //  Bracket Notation
person["name"] = "Mary";
console.log(person["name"]);
console.log("--------");

//  As you can see, dot notation is a bit more concise so is considered default by most programmers
//  Bracket notation is useful in situations where the object key you are referencing may change.
//  //  //  This is a bit more advanced and will be more easy to understand once you are a more experienced programmer
let selection = "name";
person[selection] = "Rosa";
console.log(person.name);
console.log("--------");

//  --------  //

//  Arrays  //

//  --------  //

//  Arrays can be used to store a list of values in a variable
let selectedColors = ["red", "blue"]; //  The [] brackets are known as "array literals"
console.log(selectedColors);
console.log("--------");
//  //  //  Now when you view your array in the console, you will notice each value has an index that determines its position in the array.
//  //  //  The index starts at 0 by default, so in the above example "red"'s index is 0, and "blue"'s index is 1
//  //  //  You can use the value's index to access it easier
console.log(selectedColors[0]); //  By using the array literals [] and the index number of 0, the console should print this as "red"
console.log("--------");
//  You can also add additional items to the array by using index number.
selectedColors[2] = "green";
console.log(selectedColors);
console.log("--------");
//  As you can see, the length of variables is dynamic.
//  The type of objects in each array is dynamic as well.
//  //  For example, your array can have mixes of strings, numbers, booleans
console.log(typeof selectedColors); //  An array is also considered an object type
console.log("--------");
//  Objects in JavaScript have properties assigned by the browser's defaults
//  //  We can access those properties using dot notation
console.log(selectedColors.length);
console.log("--------");
//  //  Length is given as an example. Visual Studio Code will show you the full list of properties once you begin typing the "."
//  //  //  Length returns the number of elements in an array

//  --------  //

//  Functions //

//  --------  //

//  A set of statements that performs a tasks or calculates a value
function greet() {
  //  Using the keyword "function", we name and store a function called greet()
  //  The elements inside a function are referred to as the body
  console.log("Hello World"); //
} //  Function declarations do not need a ; to close them, the ending curly bracket contains everything.
greet(); //  Call the function by typing it's name

//  Functions can have inputs which can change how the function behaves
function greetName(name) {
  //  When we put a variable inside of a function declaration, like in this example, it is now referred to as a parameter
  console.log("Hello " + name); //  We can use the variable name here to concatenate two strings
}

greetName("John"); //  When we are calling the function, the variable we pass through is called an argument.
greetName("Mary");
console.log("--------");

//  Functions can also have multiple parameters
function greetFull(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greetFull("John"); //  If you only pass one argument through now, it will print Hello John undefined
greetFull("John J", "Jingleheimer-Schmidt"); //  Prints as expected

//  The previous example of functions are performing a task

//  Here is an example of a function calculating a value
function square(myNumber) {
  return myNumber * myNumber; //  The reserved keyword return stores a number in that variable
}

let myNumber = square(2); //  Now we can declare a variable name number which is set to the function square. We then are passing through an argument of 2
console.log(myNumber); //  So now when we console log our number variable, it shows use the expected result. 2 * 2 = 4
console.log("--------");
//  Alternatively, we can call the square function through console log and get the same expected result.
//  //  Checking your functions and variables throughout the coding process is the best way to debug and validate that all of your code is working properly.
console.log(square(5));
console.log("--------");

//  console.log() is also a function. You are calling the function log() and passing through whatever you want.
console.log("Hello World"); //  Passing through a string
console.log("Hello " + name); //  Passing through a concatenation
console.log("3 times 3 equals: " + square(3)); //  Passing through an expression, even another function

//  In summary: a function is a set of statements which either performs a task or calculates and returns a value.
//  A real world application is essentially a collection of hundreds or thousands of functions working together to provide the functionality of that application