var express = require('express');
var app = express();
var Feed = require('rss-to-json');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
 
app.get('/testing', function (req, res) {
	Feed.load('https://forums.adobe.com/community/feeds/allcontent?community=5429&showProjectContent=false&recursive=true', function(err, rss){
		res.json(rss);
	});
});