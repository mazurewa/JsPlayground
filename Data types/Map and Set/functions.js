function unique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

function aclean(arr) {
	let map = new Map();
	for(let word of arr) {
	 let key = Array.from(word.toLowerCase()).sort().join('');
	 map.set(key, word);
	}
	
	return Array.from(map.values());
}