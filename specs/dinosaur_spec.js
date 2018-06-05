const assert = require("assert");
const Dinosaur = require("../dinosaur.js")


// 1. should have a type
// 2. should have a number of offspring per year

describe("Dinosaur", function(){
  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 3);
  })

  it("should have a type", function(){
    assert.strictEqual(dinosaur.species, "Tyrannosaurus");
  })


  it("should have a number of offspring per year", function(){
    assert.strictEqual(dinosaur.annualOffspringYield, 3)
  })
});
