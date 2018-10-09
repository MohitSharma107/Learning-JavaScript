// all Objects we create are the instance( or they inherit) the property of the Object function constructor(Object object). (just like object class in java).

// Simple way of creating the object

var jhon = {
  name: 'Jhon',
  yearOfBirth: 1990,
  job: 'teacher'
};

console.log(jhon);


// New and Simple way of creating multiple object

// we create object with function constructor
// first letter of function constructor is capital beacuse of convention

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
  }
}

var john = new Person('jhon', 1990, 'teacher');

var mark = new Person('mark', 1992, 'doctor');

var jane = new Person('jane', 1994, 'nurse');


console.log(mark);
john.calculateAge();

// But the problem with this is the calculateAge method will be part of all the 3 objects and the objects which dont need it still had to inherit this function. like if we have 20 or many method in Person function constructor and each function have lots of lines of code then all these objects will inherit those methods even if the dont want to use those methods.

// we can add this function in the prototype property of the Person function constructor and in this way the can use the calculateAge function without inheriting those methods


var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('jhon', 1990, 'teacher');
var mark = new Person('mark', 1992, 'doctor');
var jane = new Person('jane', 1994, 'nurse');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(jhon.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// remember  jhon prototype is Prototype property of Person function constructor. 
//  jhon._proto_ === Person.prototype

// jhon Prototype properties are  1.name 2. yearOfBirth 3. job
// in console if you click and open you will find a _proto_ property in jhon object which is the Person Proptotype property.  eg. of Person prototype property are calculateAge, lastName.
// so those property which are declared inside the object or object constructor function are prototype property of that function.

// one more thing to remember type of John object is Object and type of OBject constructor function (as the name implies it is a constructor function) is function and type of Object constructor function is also function. you can check it like this

// console.log(typeof(john));
// console.log(typeof(Person));
// console.log(typeof(Object));
