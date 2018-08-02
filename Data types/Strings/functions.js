function ucFirst(text) {
	let newText = text.charAt(0).toUpperCase() + text.slice(1);
	return newText;
}

function checkSpam(text) {
	return text.toLowerCase().includes("viagra") || text.toLowerCase().includes("XXX".toLowerCase());
}

function truncate(str, maxlength) {
	if (str.length <= maxlength) {
		return str;
	} else {
		return str.substr(0, maxlength-1) + "…";
	}
}

function extractCurrencyValue(str) {
	return parseInt(str.slice(1));
}