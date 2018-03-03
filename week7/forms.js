var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('port', 7710);

app.get('/loopback',function(req,res){
	var qitems = [];
	for(var p in req.query){
		qitems.push({'name':p,'value':req.query[p]})
	}
	var context = {};
	context.qitem = qitems;
	context.type = 'GET';
	res.render('loopback', context);
});

app.post('/loopback', function(req,res){
   var qitems = [];
   var bitems = [];
   for(var p in req.query){
      qitems.push({'name':p,'value':req.query[p]})
   }

   for(var p in req.body){
      bitems.push({'name':p,'value':req.body[p]})
   }
   var context = {};
   context.qitem = qitems;
   context.bitem = bitems; 
   context.type = 'POST';
   res.render('loopback.handlebars', context);
});

app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	res.type('plain/text');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on port ' + app.get('port') + ': press Ctrl-C to terminate.');
}); 
