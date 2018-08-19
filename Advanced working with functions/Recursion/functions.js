function sumByLoop(n) {
	let sum=0;
	for(let i=1; i<=n; i++) {
		sum += i;
	}
	return sum;
}

function sumByRecursion(n) {
	if (n==1) return 1;
	return n + sumByRecursion(n-1);
}

function sumByArithmeticProgression(n) {
	return n*(1+n)/2;
}	

function factorial(n) {
	if (n==1) return 1;
	return n * factorial(n-1);
}

function fibonacci(n) {
	if (n<=1) return n;
	return fibonacci(n-1) + fibonacci(n-2);
}

function printList(list) {
	alert(list.value);
	
	if(list.next) {
		printList(list.next);		
	}
}

function printListInReverseOrder(list) {	
	if(list.next) {
		printListInReverseOrder(list.next);		
	}
	
	alert(list.value);
}