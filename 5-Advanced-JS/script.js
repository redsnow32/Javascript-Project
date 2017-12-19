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