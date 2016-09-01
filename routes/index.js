var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page',
  students: [
	  'JT',
	  'Danny',
	  'Dan',
	  'Alex'
  		]
   });
});

/* GET weather page. */
router.get('/weather', function(req, res, next) {
	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
    request.get(weatherUrl, function(error, response, body){
    	body = JSON.parse(body);
    	res.render('weather', {
    		weatherObject: body
    	});
    })

});

/* GET movie page. */
router.get('/movie', function(req, res, next) {
	var apiBaseUrl = 'http://api.themoviedb.org/3/';  
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';	
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var npUrl  = apiBaseUrl + 'movie/now_playing' + apiKey;
	request.get(npUrl, function(error, response, body){
		body = JSON.parse(body);
		res.render('movie', { 
			title: 'Movie Page',
			movieObject: body,
			imageBaseUrl: imageBaseUrl
		});
	})
	
});

module.exports = router;


