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

module.exports = Park;
