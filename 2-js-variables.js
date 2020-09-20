//  Memory  //

//  In programming, variables are used to store data temporarily in a computer's memory
//  //  Variables are given names that can be used to read the data in the future

//  //  Here's a metaphor:
//  //  //  Think of the boxes you use to organize your stuff... these are variables
//  //  //  You put a label on each box so that you can easily find your stuff... these are variable names
//  //  Variables are used to hold your data and given names so that you can access that information in other parts of your code

//  --------    //

//  Variables 101   //

//  The most common practice of declaring a variable is using the keyword 'let'. You could also use the keyword var
//  //  //  https://stackoverflow.com/a/40775470    Here is an example of when to use var or let

let name;
console.log(name);
console.log("--------");
//  //  Opening this in the console returns as "undefined". By default, all variable values in JavaScript are undefined.
//  //  You can set values to different types of properties.

name = "My Name";
console.log(name);
console.log("--------");
//  You can set the value of a variable by typing ' = ' (which stands for gets)
//  //  Using quotations (single or double) in a variable's value stores the information as a string
//  //  //  Strings return a set of characters exactly as they are given, including typos, spaces and special characters

//  //  You can also store values as a number, e.g.:
let number = 4;
console.log("--------");

//  //  Or as a Boolean (either true or false):
var boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);
console.log("--------");

//  --------    //

//  Some common practices   //

//  There are also reserved keywords like var, if/else, let, etc. These are not allowed to be used as variable names
//  Variable names should be meaningful
//  //  It should be easy for someone to understand what your variable stores if they access it with no context
//  Cannot start with a number, space or hyphen

let firstName;   //
//  The keyword let is used interchangably with var, but serves a different function
//  //   let assigns a permanent value to the variable which cannot be changed
//  Notice the second word in firstName is uppercase. This is called "camel case" and is the convention when storing variable names in JavaScript

let firstname;   //
//  Variable names are case-sensitive, so if you typed firstName and firstname they would actually have separate values

//  If you want to declared multiple variables, you could do it on the same line.
let myFirstName = "Your First Name", myLastName = "Your Last Name";
//  //  //  However, common practice is to declare all variables on a separate line so the code is more legible
//  let firstName = "Your First Name";  //
//  let lastName = "Your Last Name";    //

//  --------    //

//  Variable keywords   //
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
console.log("--------");

//  Declaring a variable with the keywords var or let allows it to be changed later in the code
//  However, there are some situations where a variable that is unchangeable or constant because otherwise it could potentially cause bugs in the application

//  //  For this, we use the keyword const
//  //  The value of a variable can change, a constant cannot change
//  const myInterestRate = 0.3;
//  myInterestRate = 1;
//  console.log(myInterestRate);
//  //  //  If you were to take away the comment on this code, it would return a syntax error, as you have already defined interestRate as a constant

//  --------    //
