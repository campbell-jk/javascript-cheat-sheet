//  Types of Variables  //

//  --------    //

//  Primitives / Value Types    //
//  //  Strings, numbers, Booleans, undefined, and null are all known as primitive or value types
let nameType = "Your name"; //  String literal
let ageType = 30; //  Number literal
let isApproved = true; //  Boolean literal
//  //  //  Used when we want to add logic. Booleans can only be true or false.
//  //  //  //  Both true and false are reserved keywords
let undefinedType; //  There is no value stored in this variable, will come back as undefined.
let nullType = null; //  Used when you want to clear the value of a variable

//  --------    //

//  Dynamic Typing  //
//  One thing that sets JavaScript apart from other languages is it is a dynamic language
//  Static languages set variables that cannot be changed once executed
//  Dynamic languages all variables to be changed at runtime
//  //  For instance, a variable with a string can be reassigned with another value like a Boolean or number
//  You can use the typeof keyword to see the type of value in the console
console.log(typeof nameType); //  Returns as a string
console.log(typeof ageType); //  Returns as a number
console.log(typeof isApproved); //  Returns as a Boolean
console.log(typeof undefinedType); //  //  Returns as undefined. This is because undefined is also a reserved value name like true and false
console.log(typeof nullType); //  Returns as an object**
console.log("--------");

//  --------    //

//  Reference Types //
//  //  Objects, arrays and functions are all known as reference types
let person = {
    //  The syntax for curly braces is called an "object literal"
    //  Between the curly braces we can add one or more "key" value pairs
    //  The keys are what we call the properties of this object
    name: "Your Name",
    age: 30,
};
console.log(person);
console.log("--------");

//  --------    //
