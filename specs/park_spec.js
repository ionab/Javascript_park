const assert = require("assert");
const Park = require("../park.js")
const Dinosaur = require("../dinosaur.js")

// 1. enclosure should start empty
// 2. should be able to add dinosaur
// 3. should be able to remove all dinosaurs of a particular type
// 4. should get all the dinosaurs with an offspring count of more than 2

describe("Park", function(){
  let park;

  beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur("Tyrannosaurus", 3);
  })

  it("should have an enclosure that start empty", function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it("should be able to add dinosaur", function(){

    park.addDinosaur(dinosaur);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it("should be able to remove all dinosaurs of a particular type", function(){



  })

});
