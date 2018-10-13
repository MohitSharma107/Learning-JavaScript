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

// Object.create method

var personProto = {
  calcAge: function() {
    console.log(2018 - this.dateOfBirth);
  }
}

var mohit = Object.create(personProto);
mohit.name = 'mohit';
mohit.dateOfBirth = 1997;
mohit.job = 'teacher';

// slightely different way to express this is

var ankit = Object.create(personProto, {
    name: { value: 'mohit'},
    dateOfBirth: { value: 1997 },
    job: { value: 'teacher' }
});

// the difference between function constructor method and object.create method is that in function constructor method, newly created object inherits from function constructor prototype property and in Object.create method newly created object inherit directly from object by passing it in the argument.

// object.create method allows us to implement complex inheritant structures in easy way then function constructor bcz it allows to specify the object in argument from where we are inheriting properties.


/*******************
 * OBJECTS AND PRIMITIVES
 * ******************/
 

//  Primitives: - variables containing primitives actually hold that data inside of the variable itself
var a = 23;
var b = a;
a = 40;
console.log(a);
console.log(b);


// Object: - variable containing object actually do not conatin the object but instead they contain reference to place in the memory where the object sits, or where the object is stored. variable declred as the object is just like reference.


var obj1 = {
  name: 'mohit',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Function

var age = 27;
var obj = {
  name: 'rohit',
  city: 'California'
}

function change(a,b) {
   a = 30;
   b.city = 'Texas';
}

change(age, obj);  
// remember here in change function calling we are not passing whole object here, we are passing reference of the obj object

console.log(age);
console.log(obj.city);
// age variable didnt change by function is because a is copy and any changes in copy will not reflect in actual value of variable. same like call by value in java


/*******************
 * Passing Function as an argument
 * ******************/

//  Function is also object and here we are talking about function inside function

 var years = [1990, 1965, 1937, 2005, 1998];

//  this is just like a generic function( like a machine)
 function arrayCalc(arr, fn) {
     var arrRes = [];  //declaring an empty array
     for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
     }
     return arrRes;   
 }



 function calAge(el) {
    return 2018 - el;
 }

 function adult(el) {
   return el >= 18; //will return answer in true or false
 }

 function maxHeartRate(el) {
   if ( el >= 18 && el <= 81 ) {
     return Math.round(206.9 - ( 0.67 * el ));
   } else {
     return -1;
   }
 }

//  function calAge is callback function here
//  var ages = arrayCalc(years, calAge()); we wouldnt do this here as calAge() because it will call the function calAge() in any case even if we dont want to call it. And here we want to call calAge function only when arrayCalc function is called

 var ages = arrayCalc(years, calAge);
 console.log(ages);

 var isAdult = arrayCalc(ages, adult);
 console.log(isAdult);

var rates = arrayCalc(ages, maxHeartRate);
 console.log(rates);



 
/*******************
 * Function Returning Functions
 * ******************/

function interviewQuestion(job) {
    if(job === 'teacher') {
      // this function is anonymous function as it dont have any name on it
      return function(name) {
        console.log('So ' + name + ' what subject do you teach?' );
      } 
    }  else if (job === 'designer') {
      return function(name) {
        console.log('So ' + name + ' could you please tell me what UX design is?');
      }
    }
      else {
        return function(name) {
          console.log ( 'Hello '  + name + ' what do you do?');
        }  
    }
}

// getting that function (basically anonymous function) inside a variable
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('jenie');

var designerQuestion = interviewQuestion('designer');
designerQuestion('mark');
designerQuestion('jonh');
designerQuestion('elsa');

interviewQuestion('teacher')('natlie');

/*******************
 * Immediatly invoked function expression ( IIFE)
 * ******************/

// condition of the game is we will hide the score and will not allow anyone to see the score
 function game() {
   var score = Math.random() * 10;
   console.log(score >= 5);
 }

game();


// but better way of doing this is through IIFE

// declaring an anonymous function inside the parenthesis and invoking it immedietly here by adding (); next to it.
// so this kind of function can be called only once only where they are declared. 
// if will not add parenthesis around the anonymous function then JS parser will think this function as an anonymous function, since we didnt add any variable to this function so it will return error. so to trick JS parse and make it believe that what we have here is expression, not a declaration. So in solution of that we will add parenthesis around it and anything inside parenthesis cannot be a statement in JS. so it will be considered as expression with that

// we are not usinng function here to create a piece of reusable code all we want to create here is new scope that is hidden from the outside scope, so we can safely put variables so with this we obtain data privacy and also wouldn't interfere with other variables in our global execution context

// used to structure our code and to obtain data privacy and code modularity.

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();


(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})();


/*******************
 * Clousure
 * ******************/

//  An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned


function retirement(retirementAge) {
   var a = ' years left until the reitrement';
   return function (bornYear) {
      var age = 2018 - bornYear;
      console.log((retirementAge - age) + a);
   }
}

 //retirement(66)(1990);

        //or

var retirementUS = retirement(66);
retirementUS(1990); 

var retirementIND = retirement(69);
retirementIND(1990);

var retirementCAN = retirement(65);
retirementCAN(1990);


// above Question example with closure

function interviewQuestion(job) {

  return function(name) {
    if(job === 'teacher') {
      // this function is anonymous function as it dont have any name on it
        console.log('So ' + name + ' what subject do you teach?' );
      } 

      else if (job === 'designer') {
        console.log('So ' + name + ' could you please tell me what UX design is?');
      }
      else {
        return function(name) {
          console.log ( 'Hello '  + name + ' what do you do?');
      }
  }
 }
}
// getting that function (basically anonymous function) inside a variable
interviewQuestion('teacher')('josh');


/*******************
 * Bind call and apply
 * ******************/
 var jhon = {
   name: 'jhon',
   age: 26,
   job: 'teacher',
   presentation: function (style, timeOfDay) {
     if(style === 'formal') {
       console.log(`Good ${timeOfDay} ladies and genteleman. I am ${this.name}. I am a ${this.job}. I am ${this.age} year old`);
     } else if (style === 'friendly') {
       console.log(`Hey Whats up? I am ${this.name}. I am a ${this.job}. I am ${this.age} year old`);
     }
   }
 };

 var emily = {
  name: 'emily',
  age: 21,
  job: 'designer',
 };


 jhon.presentation('formal', 'morning');
 jhon.presentation('friendly', 'morning');

 //call

//  arguments of call will be 
//this, arguments
 jhon.presentation.call(emily, 'formal', 'morning');  //the this of jhon object will contain emily as object because we passed emily into it.//#endregion

 //apply

// arguments of apply will be 
//this, arguments in array
 jhon.presentation.apply(emily, ['friendly', 'morning']);


 //bind

 var jhonFriendly = jhon.presentation.bind(jhon, 'imformal');
 jhonFriendly('morning');

 var emilyFormal = jhon.presentation.bind(emily, 'formal');
 emilyFormal('evening');

 var years = [1990, 1965, 1937, 2005, 1998];

//  this is just like a generic function( like a machine)
 function arrayCalc(arr, fn) {
     var arrRes = [];  //declaring an empty array
     for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
     }
     return arrRes;   
 }



 function calAge(el) {
    return 2018 - el;
 }

 function isFullAge(limit, el) {
   return el >= limit; //will return answer in true or false
 }

 var ages = arrayCalc(years, calAge);

 var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
 console.log(ages);
 console.log(fullJapan);
 

 
/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


(function() {
  function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
          console.log(i + ': ' + this.answers[i]);
      }
  }

  Question.prototype.checkAnswer = function(ans) {
      if (ans === this.correct) {
          console.log('Correct answer!');

      } else {
          console.log('Wrong answer. Try again :)')
      }
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                        ['Yes', 'No'],
                        0);

  var q2 = new Question('What is the name of this course\'s teacher?',
                        ['John', 'Micheal', 'Jonas'],
                        2);

  var q3 = new Question('What does best describe coding?',
                        ['Boring', 'Hard', 'Fun', 'Tediuos'],
                        2);

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(answer);
})();