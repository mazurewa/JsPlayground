'use strict';
 
alert( "Hello, world!" );
alert("All fine now");
[1, 2].forEach(alert)
 
let admin;
let name;
name = 'John';
admin = name;
alert(admin);
 
let username = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"username"}` ); // ?
alert( `hello ${username}` ); // ?
 
let yourName = prompt('What is your name', '');
alert(`Hi ${yourName}!`);
confirm('Do you want to finish?');
let answer = prompt("What's the official name of Javascript?");
if (answer == "ECMAScript") {
                alert("Right!");
                } else {
    alert("You don't know? ECMAScript!"); }
               
			   
let number = prompt('Give a number');
if (number == 0) {
alert("0"); }
else if (number < 0) {
alert('-1');}
else {
alert('1'); }