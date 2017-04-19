var Countries = require('../models/countries');

var UI = function(){
  var countries = new Countries();

  countries.all(function(countries){
    this.render(countries);

    var addButton = document.querySelector('#add-country');
    addButton.addEventListener('click', function(){
      var select = document.querySelector("#all-countries");
      var index = select.options[select.selectedIndex].value;
      
    })

  }.bind(this));
}

UI.prototype = {
  render: function(countries){
    var container = document.querySelector('#all-countries');

    countries.forEach(function(country, index){
      var option = document.createElement('option');
      option.innerText = country.name
      option.value = index;
      container.appendChild(option)
    })


  }
}

module.exports = UI;