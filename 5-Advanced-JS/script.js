//Function Constructure
/*
var brandon = {
    name: "Brandon",
    yearOfBirth: 1988,
    job: "Account manager"
};

var Person = function (name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }


//Inheritance in practice. You can create a function that is accessable to all of the object keys.
Person.prototype.calculateAge = 
    function () {
        console.log(2017 - this.yearOfBirth);
    }

Person.prototype.lastName = "Smith";

var derek = new Person ("Derek", 1990, "QA");

var jane = new Person ("Jane", 1968, "Designer");

var dave = new Person ("Dave", 1950, "retired");


derek.calculateAge();
jane.calculateAge();
dave.calculateAge();

console.log(derek.lastName)
console.log(jane.lastName)
console.log(dave.lastName)
*/
/*
//Object.create
var personProto = {
    calculateAge: function() {
        console.log(2017 - yearOfBirth);
    }
};

var dave = Object.create(personProto);
dave.name = "Brandon";
dave.yearOfBirth = 1976;
dave.job = "Account manager";

var jane = Object.create(personProto,
{
    name: {value: "Jane" }, 
    yearOfBirth: {value: 1957 },
    job: {value: "Dead"}
});
*/

//Primatives vs objects
/*
variables are not contained within the object, they are simply a reference.

*/

/*
//primatives - you can see that each one holds the value b = 23 a = 46
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects all you do is change the reference to the object, you don't actually create a new function it's the same obj.
var obj1 = {
    name:"Brandon",
    age:26
}
var obj2 = obj1
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name:"Derek",
    city: "lehi"
}
//When we pass a primative into the function, a copy is created so you can change a. You don't pass an object into
//the function just a referrence to the function. 
function change (a,b) {
    a = 30;
    b.city = "Draper";
}
change(age, obj);

console.log(age);
console.log(obj.city);
*/
/*
//Passing functions as arguments     "First class functions"
    - Functions are an instance of the object type.
    - Behaves like any other object.
    - store functions in a variable
    - pass a function as an argument to another function
    -return a function from a function.
*/    

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge (el) {
    return 2017 - el;
}

function isFullAge(el) {
    return el>=18;
}

function maxHeartRate (el) {

    if(el>=18 && el<= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
};

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var isFullAge = arrayCalc(ages, isFullAge);
console.log(isFullAge);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);