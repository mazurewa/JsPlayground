function sum(a) {
	
	return function(b) {
		return a+b;
	}
}

function inBetween(min, max) {
	return function(x) {
		return x>=min && x<=max;
	};
}

function inArray(arr) {
	return function(x) {
		return arr.includes(x);
	};
}

function byField(property) {
	let map = new Map();
	map.set('name', (a, b) => a.name > b.name ? 1 : -1);
	map.set('age', (a, b) => a.age > b.age ? 1 : -1);
	
	return map[property];	
}