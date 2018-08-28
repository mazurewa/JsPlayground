Function.prototype.defer = function(ms) {
				setTimeout(this, ms);
			}
			
Function.prototype.deferSum = function(ms) {
	let outerThis = this;
	return function(...args) {
		setTimeout(outerThis.apply(null, args), ms);
	}
}