//Lecture: variables
/*
var name = "Brandon";
console.log(name);

var lastName = "Allred";
console.log(lastName);

var age = 29;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: Variables 2
/* var name = "Brandon";
var age = 29;

//console.log(name + age);

var job, isMarried;

//console.log(job)

job = "Account Manager";
isMarried = true;

console.log(name + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".");

age = "Twenty Nine";
job = "Software Developer"

console.log(name + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".");

var lastName = prompt("What is the last name?");
console.log(lastName);

alert(name + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".")
*/

//Lecture: Operators
/* var now = 2017
var birthYear = now - 29;

birthYear = (now - 29 * 2);

console.log(birthYear)

var ageBrandon = 30;
var ageJohn = 20;

ageJohn = ageBrandon = (3 + 5) * 4 - 6;
console.log(ageBrandon);
*/

//Lecture: if/else statements

/* var name = "Brandon";
var age = 29;
var isMarried = "yes";

if (isMarried === "yes") {
    console.log(name + " is married.");
} else {
    console.log(name + " will hopefully marry soon.");
}

isMarried = true;

if (isMarried) {
    console.log("Yes"); 
} else {
    console.log("NO")
}
*/

//Lecture: Boolean logic and switch

/* var age = 29;
if (age < 20) {
    console.log("John is a teenager.");
} else {
    console.log("John is a man.");
};

if(age >= 20 && age < 30) {
    console.log("He is a middle aged man.");
} else {
    console.log("He is an older man.");
}

//Switch statements

var job = "Account manager";
job = prompt("What does Brandon do?")

switch (job) {
    case "Account manager":
        console.log("Brandon manages accounts.");
        break;
    case "Software Developer":
        console.log("Brandon writes code.");
        break;
    case "Snowboarder":
        console.log("Brandon rides Snowboards.");
        break;
    defuault:
        console.log("Brandon does something else.")
}
*/

var johnHeight = 72;
var johnAge = 25;
var brandonHeight = 73;
var brandonAge = 29;
var derekHeight = 74;
var derekAge = 28;

var johnTotal = johnHeight + (johnAge * 5);
  //  console.log(johnTotal);
var brandonTotal = brandonHeight + (brandonAge * 5);
  //  console.log(brandonTotal);
var derekTotal = derekHeight + (derekAge * 5);

if(brandonTotal && derekTotal < johnTotal) {
    console.log("Johns total is the largest at " + johnTotal + ".");
} else if (johnTotal && derekTotal < brandonTotal) {
    console.log("Brandons total is the largest at " + brandonTotal + ".");
} else if (johnTotal && brandonTotal < derekTotal) {
    console.log("Derek's the winner at " + derekTotal + ".");
// } else if (johnTotal === brandonTotal) {
//     console.log("!")
}



