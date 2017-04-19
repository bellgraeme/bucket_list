var Countries = require('../models/countries');

var UI = function(){
  var countries = new Countries();

  countries.all(function(countries){
    this.render(countries);
  }.bind(this));
}

UI.prototype = {
  render: function(countries){
    var container = document.querySelector('#all-countries');

    countries.forEach(function(){
      var option = document.createElement('option');
      option.innerText = country.name
      container.appendChild(option)
    })


  }
}

module.exports = UI;