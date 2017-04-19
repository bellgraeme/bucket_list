var Countries = require('../models/countries');

var UI = function(){
  var countries = new Countries();

  countries.all(function(results){
    this.render(results);
  }.bind(this));
}

// UI.prototype = {
//   render: function(){

//   }
// }

module.exports = UI;