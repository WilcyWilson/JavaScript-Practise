
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