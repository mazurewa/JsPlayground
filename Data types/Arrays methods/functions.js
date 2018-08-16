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