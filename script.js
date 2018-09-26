/*****************************************
 * varibale and datatypers
 */

 /*
console.log('Hello world !!!');

var firstName = 'jhon';
console.log(firstName);

var lastName = 'smith';
var age = 28;

var fullAge = 'true';
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/*****************************************
 * varibale mutation and type coercion
 */

 var firstName = 'jhon';
 var age = 28;

//  Type coercion

 //Type coercion means conversion from one data type to another datatype. here jhon is a string
 // '' is also a string but age is Number so what will happen here is age which is of Number datatype
 // will convert into string data type in console.log statement. 
 console.log(firstName + '' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + ' . is he married? ' + isMarried);

 //Variable Mutation 
//  it is just same like variable reassignment. like we did here with age

 age = 'twenty eight';
 job = 'driver';

//  alert(firstName + ' is a ' + age + ' year old ' + job + ' . is he married? ' + isMarried);


//  var lastName = prompt('what is her last name');
//  console.log(firstName + ' ' + lastName);


/*****************************************
 * Basic operations
 */

var yearNow, yearJhon, yearMark;
 
yearNow = 2018;
yearJhon = 28;
yearMark = 33

//  Math operators
yearJhon = yearNow - yearJhon;
yearMark = yearNow -yearMark;


console.log(yearJhon);
console.log(yearMark);

console.log(yearNow + 2);
console.log(yearNow * 2);
console.log(yearNow / 2);

//  Logical operators

var jhonOlder = yearJhon > yearMark;
console.log(jhonOlder);

// typeof operator


console.log(typeof jhonOlder);
console.log(typeof 'yo yo');
console.log(typeof yearJhon);

var x;
console.log(typeof x);

/*****************************************
 * Operator precedence
 */

 console.log('operator precedence');

 var current = 2018;
 var yearJhonson = 1989;
 var completeAge = 18;

//  Multiple Operators
var isFullAge = current - yearJhonson >= completeAge;
console.log(isFullAge);


// Grouping
var ageJhonson = now - yearJhonson;
var ageMark = 35;
var average = (ageJhon + ageMark)/2;
console.log(average);

// Multiple Assignments
var x,y;
x = y = (3+5) * 4 - 6;  //8 * 4 -6 // 32 -6 // 26
console.log(x , y);

// More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++;


