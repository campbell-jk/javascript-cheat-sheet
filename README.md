##  [Video on YouTube](https://www.youtube.com/watch?v=W6NZfCO5SIk)

##  Thanks to Mosh Hamedani for making the video of which this cheat sheet was based.

>   [Follow him on Twitter](https://www.twitter.com/moshhamedani)

>   [His Personal Website](https://www.codewithmosh.com)

>   [His Youtube Channel](https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA)

#   JavaScript Tutorial for Beginners: Cheat Sheet

#   Table of Contents
>   [Introduction](https://github.com/campbell-jk/javascript-cheat-sheet/blob/master/README.md#introduction)

>   [JavaScript Basics](./js-basics.js)

>   [Variables 101](./js-variables.js)

>   [Variables: Value Types and Reference Types](./js-typesofvariables.js)

>   [Reference Types: Objects, Arrays and Functions](./js-referencetypes.js)

#   Introduction

##  What is JavaScript?

-   JavaScript is one of the most popular and widely used programming languages in the world right now
-   It's growing faster than any other programming language and big companies like Netflix, Walmart, and PayPal build entire applications around JavaScript
-   The average salary of a JavaScript Developer in the United States is around \$72,000/ year right now (https://www.glassdoor.com)
-   You can work as a front-end developer, back-end developer, or a full stack developer

##  What can you do with it?

-   For a long time, JavaScript was only used in browsers to build interactive web pages
-   Some developers referred to JavaScript as a toy language
-   Those days are gone as a result of huge community support and investments by large companies like Facebook and Google
-   With JavaScript, you can build
-     full-blown web or mobile apps,
-     real-time networking apps like chats and video,
-     command-line tools,
-     or even games

##  Where does JavaScript code run?

-   JavaScript was originally designed to run only in browsers
-   Every browser has what we call a JavaScript engine that can execute code
-   For example, the JavaScript engines in Firefox and Chrome are SpiderMonkey and v8
-   In 2009, an engineer named Ryan Dahl took the open-source JavaScript engine in Chrome and embedded it inside a C++ program which he named Node
-       Node is a C++ program that includes Google's v8 JavaScript engine. With it, we can run JavaScript code outside of a browser
-       Node executes our JavaScript file in a local run-time environment
-   With JavaScript, we can build the back-end of our web and mobile applications

##  What is the difference between JavaScript and ECMAScript?

-   JavaScript
-     Is a programming language that confirms to ECMA specifications

-   ECMAScript
-     Is a specification, not a language
-     Created by ECMA, an organization that is responsible for defining standards for programming languages
-     The first version of ECMAScript was realeased in 1997
-     Starting in 2015, ECMA has been working on annual releases of a newest specification. 
-     The first release was ECMAScript2015, or ES6 for short
-     EC6 defined many new features for JavaScript

#   Let's see it in action!

##  As said earlier, each browser has a JavaScript engine

-   In Google Chrome, you can see the JavaScript engine by right-clicking and hitting inspect, or using ctrl-i or cmd-i for PC/Mac
-   This opens the Chrome DevTools
-   Click the console tab. This is the JavaScript engine's console and you can write any valid JavaScript code here
-   In the DevTools console, type:
>     console.log("Hello World");
-   This will print Hello World in the console

-   You can also type mathematical equations in the console:
>     2 + 2;

-   You can also use other features in DevTools console. For instance:
>     alert("Hello World");

#   Setting Up the Development Environment

-   If you need help with setting up your environment, reference the video (https://www.youtube.com/watch?v=W6NZfCO5SIk) and watch from 4:42 to 5:48
>     [Download Visual Studio Code](https://code.visualstudio.com)
>     [Download Node](https://nodejs.org/en/)
