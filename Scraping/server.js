var express = require('express')
var fs = require('fs')
var request = require('request')
var cheerio = require('cheerio')
var app     = express()

app.get('/scrape', function(req, res){

  let url = 'http://www.spotland.fr/fr/108-skateboard/pays-france'
  let url2 ='http://www.spotland.fr/fr/map/108-skateboard/pays-france'

  request(url2, function(error,response,html){
      if(!error){
        var $ = cheerio.load(html);

        console.log(html)

        var title, release, rating;
        var json = { title : "", release : "", rating : ""};
      }
  })


})

app.listen('8081')

console.log('Magic happens on port 8081')

exports = module.exports = app
