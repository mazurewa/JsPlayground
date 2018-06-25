'use strict';

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let schedule = {};
alert( isEmpty(schedule) );
schedule["8:30"] = "get up";
alert( isEmpty(schedule) );

function isEmpty(obj) {
  for (let key in obj) {
  return false
  }
  return true;
}

let salaries = {
	John: 100,
	Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
};

alert(sum);

alert("Multiplying numbers");

let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };   
    
    function multiplyNumeric(obj) {
      for(let key in obj) {
	    if (typeof(obj[key]) == "number") {
		  obj[key] *= 2;
		}	
	  }
    }
    
    multiplyNumeric(menu);
    
    alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
	
let contact = {
  name: "John",
  go: function() { alert(this.name) }
};

(contact.go)()