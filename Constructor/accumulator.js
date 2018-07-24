function Accumulator(startingValue) {
	     this.value = startingValue;
		 this.read = function() {
		    let newValue = +prompt("New value: ");
			this.value += newValue;
		 }
	   }