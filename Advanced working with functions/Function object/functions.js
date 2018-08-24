 function makeCounter() {
      let count = 0;
    
      function counter() {
        return count++;
      }
    
      counter.set = function(value) {
		  count = value;
	  }		  
      counter.decrease = function() {
		  count--;
	  }
    
      return counter;
    }

	function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
