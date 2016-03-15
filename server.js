'use strict';

var express = require('express')
  , cors = require('cors')
  , kickass = require('kickass-api');

var app = express();

app.use(cors());

app.get('/search/:category/:query?', function (req, res) {
	let data = {
		category: req.params.category,
		sort_by: 'pubDate',
		order: 'desc'
	};

	if(req.params.query) data.query = req.params.query;

	kickass.search(data).then(response => {
		res.json(response);
	})
	.catch(err => {
		console.log(err);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
