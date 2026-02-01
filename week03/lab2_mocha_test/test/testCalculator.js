require('chai').expect();
const { expect } = require('chai');
const calc = require('/app/calculator');

describe ('Calculator Tests', function() {
    //Addition Test
    it("add(5,2) should return 7 PASSED", function(){
        expect(calc.add(5,2)).to.equal(7);
    });

    it("add(5,2) should return 8 FAILED", function () {
    expect(calc.add(5, 2)).to.not.equal(8);
  });
    
    //MultiplicatioN Test
    it("mul(5,2) should return 10", function() {
        expect(calc.mul(5,2)).to.equal(10);
    });

    it("mul(5,2) should return 12 FAIL", function () {
    expect(calc.mul(5, 2)).to.not.equal(12);
  });


    //Sub
     it("sub(5,2) should return 3 PASS", function () {
    expect(calc.sub(5, 2)).to.equal(3);
  });

    it("sub(5,2) should return 4 FAIL", function () {
    expect(calc.sub(5, 2)).to.not.equal(4);
    }); 

  // Division Test
  it("div(10,2) should return 5 PASS", function () {
    expect(calc.div(10, 2)).to.equal(5);
  });

  it("div(10,2) should return 2 FAIL", function () {
    expect(calc.div(10, 2)).to.not.equal(2);
  });

});


