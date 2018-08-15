describe("ucFirst", function() {
	it("Uppercases the first symbol", function() {
		assert.strictEqual(ucFirst("john"), "John");
	});
	
	it("Doesnt die on an empty string", function() {
		assert.strictEqual(ucFirst(""), "");
	});
});	

describe("checkSpam", function() {
	it('finds spam in "free xxxxx"', function() {
		assert.isTrue(checkSpam('free xxxxx'))
	});
	
	it('no spam in "innocent rabbit"', function() {
		assert.isFalse(checkSpam("innocent rabbit"))
	});
});

describe("truncate", function() {
	it('truncate the long string to the given length (including the ellipsis)', function() {
	assert.equal(truncate('Everything is everything, after winter must come spring', 30), 'Everything is everything, aft…')});
	
	it('doesn\'t change short strings', function() {
	assert.equal(truncate('Lauryn Hill', 15), 'Lauryn Hill')});
});
	
describe('extractCurrencyValue', function() {
	it("for the string $120 returns the number 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });
});

	