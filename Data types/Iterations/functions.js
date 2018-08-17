function sumSalaries(salaries) {
	let sum = 0; 
	for(let salary of Object.values(salaries)) {
		sum += +salary;
	}
	return sum;
}

function count(obj) {
	return Object.keys(obj).length;
}

function topSalary(salaries){
	let nameWithMaxSalary = null;
	let max = 0;
	for(let personInfo of Object.entries(salaries)) {
		let [name, salary] = personInfo;
		if(salary >= max) {
			nameWithMaxSalary = name;
			max = salary;
		}
	}
	return nameWithMaxSalary;
}