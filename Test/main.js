// document.body.innerHTML = "THIS IS SOME CONTENT";


      // Methods are functions attributable to an object
      // Functions are created to enable reusable code, can either be called in the same code/another code
/*
// named function
function testExample(a) {
    var greeting = "Hi! My name is " +a;
    return greeting;
}

console.log(testExample("Nick"));


// anonymous function ->hoisting 
var testExample1 = function(a) {
    var greeting =  "Hello! Good mornign world name:" +a;
    return greeting;
}

console.log(testExample1(12));

// Immediately invoke function
(function () {
    var greeting = "Hi! My name is Daniel";
    console.log( greeting);
}())
*/


// calculator function
function calc() {
    // DOM -> Using element from files that had loaded inside browser
    // Select element base on class/id
    // We grab input value with the keyword .value
    // parseInt returns the value as integer to the browser/code
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;

    var calculate;

    if(op == "add") {
        calculate = a + b;
    } else if(op == "min") {
        calculate = a - b;
    } else if(op == "div")    {
        calculate = a / b;
    } else if(op == "mul")    {
        calculate = a * b;
    }

    // console.log(calculate);
    document.querySelector('#result').innerHTML = calculate;

}



// global scope -> a variable declare at the root/beginning of file that can be access through the entire code
var number = 10;

// function scope -> the scope that inbetween curly bracket e.g. local scope
// name function loads slower than anonymous function
function newCalc() {
// local variable are only accessible inside the function that they are called    var localNumber = 5; //local variable
    return localNumber;
    // return number;
}

// console.log(newCalc());




// Block scope are stand alone function with curly_bracket, can be access anywhere in the code e.g. if...else statement
// { var a = 20; }


// hoisting -> read js_code and put it on top fo the document in the browser
// var is accessible anywhere, a flaw compare to let
// 'let' makes code work like function and fixes the flaws in 'var'

if(1 == 1) {
    var a = 5;
    let b = 10;
}

// const works like let, fixes var flaws but its value can not be changed later in the code

let ex1 = 10;
const ex = 10;
// console.log(ex);

// ex = 120;
// ex1 = 100;

// console.log(ex);


// HOISTING, ANONYMOUS, NAME function
// Hoisiting takes the document of variable out from a code and put it on top of browser

var a = "First";
var b = "Second";
var c = "Third";

// console.log(a + " " + b + " " + c);
d = "Forth";
console.log(d);


var d;//hoisting

// anonymous function, won't display without assigning value at first
//  better used inside to code to avoid using much space in the browser
var a = function() {
    var a = 20;
    return a;
}

console.log(a());
