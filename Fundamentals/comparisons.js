'use strict';

let number = prompt('Give a number');
if (number == 0) {
alert("0"); }
else if (number < 0) {
alert('-1');}
else {
alert('1'); }

let username = prompt('Who\'s there?');
if (username == "Admin") {
	let password = prompt('Password?');
if (password == "TheMaster") {
alert("Welcome!"); }
else if (password == '' || password == null) {
alert('Canceled');}
else {
alert('Wrong password'); }
}
else if (username == '' || username == null) {
alert('Canceled');}
else {
alert('I don\'t know you'); }

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}