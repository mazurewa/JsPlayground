'use strict';

let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = prompt("Provide number 1");
	this.b = prompt("Provide number 2");
  },
  sum() {
	  return +this.a + +this.b;
  },
  mul() {
	  return this.a * this.b;
  }
};