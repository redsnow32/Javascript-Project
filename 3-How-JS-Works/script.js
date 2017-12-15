///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1978);

function calculateAge(year ){
    console.log(2017 - year);
}
calculateAge(1988);


//Expressions can only be called after being assigned.
var retirement = function (year) {
    console.log(65 - (2016 - year));
}
retirement(1988);

//variables

console.log(age);
//variables that are called prior to being expressed
//are going to show up as undefined. variables that don't
//have a value yet
var age = 29;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

//You can use function declariations prior to declaring
//them in our code.


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

The only variables the third function can access are 
a & d
console.log(a+b);
*/



///////////////////////////////////////
// Lecture: The this keyword


/*
The "this" keyword points to the "global object" or the window
Method call "this " keyword points to the object calling the method
not assigned a value until the object calls a method
this is attached to a an execution context which is only 
attached when a function is called.
 */

 //console.log(this);

 function calculateAge(year) {
     console.log(2017 - year);
     console.log(this);
 }

 var brandon = {
     name: "Brandon",
     yearOfBirth: 1988,
     calculateAge : function () {
         console.log(2017 - this.yearOfBirth);

         function innerFunction() {
             console.log(this);
         }
         innerFunction();
     }
 }

 brandon.calculateAge();



 var mike = {
     name: "Mike",
     yearOfBirth: 1955
 };

 mike.calculateAge = brandon.calculateAge;
 mike.calculateAge();





