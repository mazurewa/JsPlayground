function readNumber() {		
		let number;
		do {
		number = prompt("Give a number: ");		
		} while (!isFinite(number));
		
		if (number === null || number === '') {
		return  null;
		}
		return +number;
		}