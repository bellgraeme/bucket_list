var Countries =  function(){};

Countries.prototype = {

  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },

  all: function(){
    this.makeRequest("https://restcountries.eu/rest/v2/all", function(){
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      callback(results);
    })
  }

}



module.exports = Countries;