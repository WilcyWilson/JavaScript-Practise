/*
// Normal Object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// Ataching function to the prototype of our Person constructor object
Person.prototype.calculateAge = function(){
    console.log(2016-this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// Instance(Object) of Function constructor
var john = new Person('John',1990,'teacher');
var jane = new Person('Jane',1969,'designer');

// Calling the prototype method (Inheritance)
john.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
*/
/*
// Object.create
var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
};
*/
/*
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,{
    name: { value: 'Jane'},
    yearOfBirth: {value: 1969},
    job : {value: 'farmer'}
});
*/

/*
//Primitives vs objects
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

/*
// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a=30;
    b.city = 'San Francisco';
}

change(age,obj);

console.log(age);
console.log(obj.city);
*/

/*
// Passing Functions as arguments in a Function

var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2021 - el;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

function isFullAge(el) {
    return el >= 18;
}

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return -1;
    }
}
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

// IIFE

// Normal Function 
// function game() {
//     var score = Math.random * 10;
//     console.log(score >= 5);
// }
// game();

// IIFE Function
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// console.log(score);

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// Closures
/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2021 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990)
retirementIceland(1990);
*/

//retirement(66)(1990);

// Returning Function inside Function
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher'){
        return function (name){
            console.log(name + ' What subject do you teach, ' + name + '?');
        }
    }
    else{
        return function (name) {
            console.log('Hello ' + name + ', What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mike');

interviewQuestion('teacher')('Max');
interviewQuestion()('Max');
*/

// Using Closure
/*
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer')
            console.log(name + ', can you please explain what UX design is?');
        else if (job === 'teacher')
            console.log(name + ' What subject do you teach, ' + name + '?');
        else
            console.log('Hello ' + name + ', What do you do?');
    }
}

interviewQuestion('teacher')('Max');
interviewQuestion('designer')('John');
*/

// Bind, call and apply
/*
var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay
                + ' , Ladies and gentleman ! I\'m ' + this.name
                + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? '
                + ' I\'m ' + this.name
                + ' I\'m a ' + this.job + ' and I\'m ' + this.age 
                + ' years old.' + ' Have a nice ' + timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
};

john.presentation('formal','morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');

emilyFormal('afternoon');
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2021 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

// Quiz Game
/*
(function () {
    var Question = function (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ":" + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function () {
        var choice = parseInt(prompt("Enter your choice?"));
        if (choice === this.correct) {
            console.log("Correct Answer");
        } else {
            console.log("Incorrect Answer");
        }
    };

    var question1 = new Question("What is the best Programming Language in the World?", ["Java", "JavaScript", "C#"], 1);
    var question2 = new Question("Who is  the teacher of the course?", ["John", "Jemme", "Jonas"], 2);
    var question3 = new Question("Do you like toothpaste?", ["Yes", "No"], 0);

    var questions = [question1, question2, question3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
    questions[n].checkAnswer();
})();
*/

(function () {
    var score = 0;
    var Question = function (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ":" + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (answer) {
        if (answer === this.correct) {
            console.log("Correct Answer");
            score++;
        } else {
            console.log("Incorrect Answer");
        }
    };

    var question1 = new Question("What is the best Programming Language in the World?", ["Java", "JavaScript", "C#"], 1);
    var question2 = new Question("Who is  the teacher of the course?", ["John", "Jemme", "Jonas"], 2);
    var question3 = new Question("Do you like toothpaste?", ["Yes", "No"], 0);

    var questions = [question1, question2, question3];
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();
        var answer = prompt("Enter your choice?");

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer));
            nextQuestion();
        }
    };
    nextQuestion();
    console.log('Exiting......');
    console.log('The score is:' + score);
})();







