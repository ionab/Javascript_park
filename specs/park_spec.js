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
    dinosaur1 = new Dinosaur("Tyrannosaurus", 6);
    dinosaur2 = new Dinosaur("Velociraptor", 3);
    dinosaur3 = new Dinosaur("Triceratops", 2);
  })

  it("should have an enclosure that start empty", function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it("should be able to add dinosaur", function(){

    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it("should be able to remove all dinosaurs of a particular type", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);

    assert.strictEqual(park.enclosure.length, 4);
    park.removeDinoByType("Tyrannosaurus");
    assert.strictEqual(park.enclosure.length, 2);
  });

  it("should get all the dinosaurs with an offspring count of more than 2", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const results = park.calculateDinosaursWithHighOffspringYield(2);
    assert.strictEqual(results.length, 3);
  });

});
