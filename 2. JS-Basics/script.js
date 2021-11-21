/* var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var $3years = 3;

var _3years = 3;

var e3years = 3;

var johnMark = 'John and Mark';

var itsNull = null;

console.log(itsNull); */

/* Variable Mutation and Type Coercion */
/* 
var firstName = 'John';
var age = 28; */

/* Type Coercion */
/* console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); */


/* Variable Mutation */

/* age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');

console.log(firstName + ' ' + lastName); */

/* Basic Operators */

/* var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33; */

/* Math Operators */
/* yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);

console.log(now * 2);

console.log(now / 10); */

/* Logical Operators */
/* var johnOlder = ageJohn > ageMark;

console.log(johnOlder); */

/* typeof operator */
/* console.log(typeof johnOlder);

console.log(typeof 15.32);

console.log(typeof ageJohn);

console.log(typeof 'Mark is older than John');

var x;

console.log(typeof x); */

/* Operator precedence */

/* var now = 2018;
var yearJohn = 1989;
var fullAge = 18; */

/* Multiple Operators */
/* var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge) */
;


/* Grouping */
/* var ageJohn = now - yearJohn;
var ageMark = 35

var average = (ageJohn + ageMark) / 2;
console.log(average); */

/* Multiple assignments */
/* var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); */

/* More operators */
/* 
x *= 2;
console.log(x);

x += 10;
console.log(x);

x++;
console.log(x); */

/* var markMass = 80; // kg
var markHeight = 2; // meters

var johnMass = 90; // kg
var johnHeight = 2.8; // meters

var johnBmi = johnMass / Math.pow(johnHeight, 2); // BMI
var markBmi = markMass / Math.pow(markHeight, 2); // BMI

console.log(markBmi, johnBmi);

var isHigher = markBmi > johnBmi;

console.log('Is Mark\'s BMI higher than John\'s? ' + isHigher); */

/* If else statements */

/* var firstName = 'John';
var civilStatus = 'single';


if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var markMass = 80;
var markHeight = 2; 

var johnMass = 90; // kg
var johnHeight = 2.8; // meters

var johnBmi = johnMass / Math.pow(johnHeight, 2); // BMI
var markBmi = markMass / Math.pow(markHeight, 2); // BMI

if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
} */


/* Boolean Logic */

/* var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { //Between 13 and 20
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
} */

/* The Ternary Operator and Switch Operators */

/* var firstName = 'John';
var age = 16; */

// Ternary Operator
/* age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink); */

/* if (age>=18){
    var drink = 'beer';
} else {
    var drink = 'juice';
} */


// Switch Statement
/* var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'desinger':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' is Superman');
}
 */

/* var firstName = 'John';
var age = 17;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
} */

/* Truthy and Falsy Values equality operators */

// falsy values : undefined, null, 0, '', NaN
// truthy values : NOT falsy values

/* var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
} */

// Equality Operators
/* if (height === '23') {
    console.log('The == operator does type coercion!');
} */

/* var johnScore1 = 80;
var johnScore2 = 94;
var johnScore3 = 250;

var mikeScore1 = 91;
var mikeScore2 = 134;
var mikeScore3 = 105;

var maryScore1 = 900;
var maryScore2 = 134;
var maryScore3 = 105;

var johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;
var mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
var maryAverage = (maryScore1 + maryScore2 + maryScore3) / 3;

console.log(johnAverage, mikeAverage, maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log('Team John wins in average with Average score of: ' + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log('Team Mike wins in average with Average score of: ' + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log('Team Mary wins in average with Average score of: ' + maryAverage);
} else if (johnAverage === maryAverage && johnAverage !== mikeAverage) {
    console.log('Team John and Team Marry has the same average score of: ' + johnAverage);
} else if (johnAverage === mikeAverage && johnAverage !== maryAverage) {
    console.log('Team John and Team Mike has the same average score of: ' + mikeAverage);
} else if (maryAverage === mikeAverage && maryAverage !== johnAverage) {
    console.log('Team Mary and Team Mike has the same average score of: ' + maryAverage);
} else {
    console.log('All Team John, Team Mike and Team Marry has the same average score of: ' + mikeAverage);
} */


/* Functions */

/* function calculateAge(brithYear) {
    return 2020 - brithYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageJane = calculateAge(1920);

console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement +' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
   
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1960, 'Mike');
yearsUntilRetirement(1920, 'Jane'); */

/* Function Statements and Expressions */

//Function Declaration
/* function doSomething() {
    console.log("Declare Something");
} */


// Function Expression
/* var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a car'
        case 'designer':
            return firstName + ' designs a house'
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('retired', 'Jane')); */

/* console.log(doSomething)
doSomething();

function doSomething() {
    console.log("Declare Something");
}

console.log(something);
something();

var something = function(){
    console.log("Express Something");
}; */

/* var runIt = function(a){
    console.log(a);
    a();
};

runIt(function() {
    var b = "Now";
    console.log("Running" + b);
}); */

/* Arrays */

// Initialize new array
/* var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length); */

// Mutate array data
/* names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names); */

// Different data types
/* var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' :
                'John is a designer';

console.log(isDesigner); */

/* Coding Challenge 3 */

/* function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

console.log(tips);

var amounts = [tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2]
];

console.log(amounts); */

/* Object and Properties */

// Object Literal
/* var john = {
    firstName: 'John',
    lastName: 'Smith',
    brithYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}; */

/* console.log(john.firstName);
console.log(john['lastName']);

var x = 'brithYear';
console.log(john[x]);

john.job = 'driver';
john['isMarried'] = true;
console.log(john); */

// new Object Syntax
/* var jane = new Object();
jane.firstName = 'Jane';
jane.brithYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane); */

/* Objects and Methods */

/* var john = {
    firstName: 'John',
    lastName: 'Smith',
    brithYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2020 - this.brithYear;
    }
};

john.calcAge();
console.log(john);
 */

/* Coding Challenge 4 */

/* var mark = {
    fullName: 'Mark Piler',
    mass: 95,
    height: 2.1,
    calcBMI: function () {
        this.bmi = this.mass / Math.pow(this.height, 2);
        return this.bmi;
    }
};

var john = {
    fullName: 'John Cena',
    mass: 95,
    height: 2.1,
    calcBMI: function () {
        this.bmi = this.mass / Math.pow(this.height, 2);
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    getInfo(john);
} else if (mark.bmi> john.bmi){
    getInfo(mark);
} else {
    console.log("Both of them have same BMIs of " + john.bmi);
} */

/* 
function getInfo(who) {
    console.log(who.fullName + ' has the higher BMI of ' + who.bmi);
}

console.log(john);
console.log(mark); */

/* Loops and Iteration */

/* for (var i = 1; i <= 10; i += 2) {
    console.log(i);
} */

/* var john = ['John', 'Smith', 1990, 'designer', false];
 */
// For Loop
/* for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}  */

// While Loop
/* var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
} */


/* var john = ['John', 'Smith', 1990, 'designer', false];
 */
/* for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string')
        continue;

    console.log(john[i]);
}

console.log('\n');

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string')
        break;

    console.log(john[i]);
} */

/* var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
} */

/* Coding Challenge 5 */

/* var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function () {
        this.tips = [];
        this.amount = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill <= 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = percentage * bill;
            this.amount[i] = this.tips[i] + bill;
        }
    }
};


var mark = {
    fullName: 'Mark Piler',
    bills: [77, 5, 110, 45],
    tipCalculator: function () {
        this.tips = [];
        this.amount = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = percentage * bill;
            this.amount[i] = this.tips[i] + bill;
        }
    }
};

john.tipCalculator();
mark.tipCalculator();
console.log(john, mark);

function averageTip(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

john.averageTip = averageTip(john.tips);
mark.averageTip = averageTip(mark.tips);

if (john.averageTip > mark.averageTip) {
    console.log(john.fullName + '\'s family pays higher');
} else if (john.averageTip < mark.averageTip){
    console.log(mark.fullName + '\'s family pays higher');
} else {
    console.log('Both pays the same');
} */

