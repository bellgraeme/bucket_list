var express = require('express');
var countryRouter= express.Router();
var ListQuery = require('../db/listQuery.js');
var listQuery = new ListQuery();




countryRouter.get('/', function(req, res){
  listQuery.all( function(countries){
    res.json(countries);
  })
});

countryRouter.post('/',function(req, res){
  console.log(req)
  listQuery.add(req.body, function(countries){
    res.json(countries)  
  })
})


module.exports = countryRouter;