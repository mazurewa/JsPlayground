function camelize(str) {
	let parts = str.split('-');
	for(let i=1; i<parts.length; i++) {
		parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
	}
	return parts.join('');
}

function filterRangeInPlace(arr, a, b) {
    
      for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }   
}

function reverseSort(arr) {
	arr = arr.sort((a,b) => b-a);
}

function copySorted(arr) {
	let sorted = arr.slice(0).sort();
	return sorted;
}

function arrayMapping() {
	let john = { name: "John", age: 25 };
	let pete = { name: "Pete", age: 30 };
	let mary = { name: "Mary", age: 28 };
	
	let users = [ john, pete, mary ];
	
	let names = users.map(user => user.name);

	alert( names );
}

function anotherArrayMapping() {
	let john = { name: "John", surname: "Smith", id: 1 };
	let pete = { name: "Pete", surname: "Hunt", id: 2 };
	let mary = { name: "Mary", surname: "Key", id: 3 };
	
	let users = [ john, pete, mary ];
	
	let usersMapped = users.map(item => ({id: item.id, fullName: item.name + " " + item.surname}));
	
	alert( usersMapped[0].id ) // 1
	alert( usersMapped[0].fullName ) // John Smith
}

function sortByName(arr) {
	arr.sort((a,b) => (a.name > b.name));
}

function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}























