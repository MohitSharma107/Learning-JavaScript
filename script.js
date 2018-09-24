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

 alert(firstName + ' is a ' + age + ' year old ' + job + ' . is he married? ' + isMarried);


 var lastName = prompt('what is her last name');
 console.log(firstName + ' ' + lastName);


