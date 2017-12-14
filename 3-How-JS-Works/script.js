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

/*
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
*/



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
*/



///////////////////////////////////////
// Lecture: The this keyword









