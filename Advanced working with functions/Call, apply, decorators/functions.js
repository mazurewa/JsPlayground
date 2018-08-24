function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}

function delay1(f, ms) {
  return function() {	 
	  setTimeout(f.apply(this,arguments), ms);
  }
}

function delay(f, ms) {
  return function(...args) {
    let savedThis = this;
    setTimeout(function() {
      f.apply(savedThis, args);
    }, ms);
  };
}

function debounce(f, ms) {
	let isFreezed = false;	
	
	return function() {
		if(!isFreezed) {
			f.apply(this, arguments);
			isFreezed = true;
			setTimeout(() => isFreezed = false, ms);
		}
	}
 }
