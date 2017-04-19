var Countries = require('../models/countries');
var SavedCountries = require('../models/savedCountries');


var UI = function(){

  this.selectedCountry = null;

  this.countries = new Countries();
  var savedCountries = new SavedCountries();

  this.countries.all(function(countries){
    this.render(countries);
  }.bind(this));

  savedCountries.all(function(dbCountries){
    this.populateList(dbCountries);
  }.bind(this))
}

UI.prototype = {
  render: function(countries){
    var container = document.querySelector('#all-countries');

    countries.forEach(function(country, index){
      var option = document.createElement('option');
      option.innerText = country.name
      option.value = JSON.stringify(country);
      container.appendChild(option)
    })
  var self =this
    container.onchange = function(e){
      self.selectedCountry = this.value;
    };

    var button = document.querySelector('#add-country');
    button.onclick = function(){
      this.countries.makePostRequest("http://localhost:3000/api/countries", this.selectedCountry, function(savedCountries){ this.populateList(savedCountries)
      }.bind(this) )
    }.bind(this);
  },

  populateList: function(savedCountries){
    var container = document.querySelector('#countries-list')
    container.innerHTML = ''
    savedCountries.forEach(function(savedCountry){
      var li = document.createElement('li');
      li.innerText = savedCountry.name;
      container.appendChild(li);
    })
    
  }

}

module.exports = UI;