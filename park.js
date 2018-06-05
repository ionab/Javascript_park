const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);

};


Park.prototype.removeDinoByType = function(dinosaurType) {
  for (var i=0; i<this.enclosure.length; i++){
    if (this.enclosure[i].species === dinosaurType){
      this.enclosure.splice(i, 1);
      i--;
    }
  }
};

Park.prototype.calculateDinosaursWithHighOffspringYield = function (threshold) {
  const dinosaurs = [];
  for (var i = 0 ; i < this.enclosure.length ; i++){
    if(this.enclosure[i].annualOffspringYield > threshold){
      dinosaurs.push(this.enclosure[i]);
    }
  }return dinosaurs;
};

Park.prototype.waitTime = function() {

  let count = this.enclosure.length;
  for (var i = 0 ; i < this.enclosure.length ; i++){
    count += this.enclosure[i].annualOffspringYield;
  }
  return count;
};

module.exports = Park;
