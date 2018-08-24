function printNumbersUsingSetInterval(from, to) {
	let i = from;
	let timerId = setInterval(function() {
	alert(i);
	if (i== to) {
		clearInterval(timerId);
	}
	i++;
}, 1000);
}

function printNumbersUsingSetTimeout(from, to) {
	let i = from;
	let timerId = setTimeout(function tick() {
		alert(i);
		timerId = setTimeout(tick, 2000);
	if (i== to) {
		clearTimeout(timerId);
	}
	i++;
	}, 2000);
}