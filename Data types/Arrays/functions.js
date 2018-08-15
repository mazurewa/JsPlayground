function arrayOperations() {
	let array = ["Jazz", "Blues"];
		  array.push("Rock-n-Roll");
		  let middleIndex = Math.floor((array.length-1)/2);
		  array[middleIndex] = "Classics";
		  alert(array.shift());
		  array.unshift("Rap", "Reggae");
		  alert(array);
}

function sumInput() {
	let numbers = [];
	while (true) {

    let number = prompt("Give a number", 0);

    if (number === "" || number === null || !isFinite(number)) break;

    numbers.push(+number);
		}
	
	let sum = 0;
	for (let n of numbers) {
		sum += n;
	}
	
	alert(sum);
}

function Calculator() {
	let operations = {'+': (a,b) => a+b,
					  '-': (a,b) => a-b}; 
	
	this.calculate = function(str) {
		let parts = str.split(' ');
		let a = +parts[0];
		let operator = parts[1];
		let b = +parts[2];
		
		if (a.isNaN || b.isNaN || !operations[operator]) {
			return NaN;
		}
		
		return operations[operator](a,b);		
	};
	
	this.addMethod = function(name, func) {
		operations[name] = func;
		}
}

function getMaxSubSum(array) {
	let maxSum = 0;
	let partialSum = 0;
	
	for (let item of array) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if (partialSum < 0) partialSum = 0;
	}
	
	return maxSum;
}
