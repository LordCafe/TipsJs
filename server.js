var express = require('express');
const hbs = require('express-handlebars');
var app = express();
var path    = require("path");
const PUBLIC = path.join(__dirname + '/public');
require('./school/routes')(app);

app.use(express.static(PUBLIC));

// Use Handlebars view engine


app.engine( 'hbs', hbs( { 
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
} ) );

app.set( 'view engine', 'hbs' );



app.get('/',function(req,res){ 
	 res.render('home',	{
	 	fields :['id','title','summary','taxonomy','url','images','sub_taxonomy','type','audios'],
	 	typeNotes :['article','gallerie','gallery','video','videos'],
	 	SORT : 'created:DESC',
	 	LIMIT : '9',
	 	OFFSET : '9',
	 	parameters :{
	 		API : 'https://api.invent.mx',
	 		REPO : 'nodes.json',	 		
	 		SITE : 'actitudfem',
	 		VERSION :'v1',
	 		KEY : '22360f3a2e03f847acf5339695e42e5b'
	 	},
	 	footerScrtisps :[
	 		'/js/custom/jsonp.js',
	 		'/js/createCards.js',
	 		'/js/init.js'
	 	]
	 });
});	



app.get('/school',function(req,res){ 
	 res.render('school',	{
	 	fields :['id','title','summary','taxonomy','url','images','sub_taxonomy','type','audios'],
	 	typeNotes :['article','gallerie','gallery','video','videos'],
	 	SORT : 'created:DESC',
	 	LIMIT : '9',
	 	OFFSET : '9',
	 	parameters :{
	 		API : 'https://api.invent.mx',
	 		REPO : 'nodes.json',	 		
	 		SITE : 'actitudfem',
	 		VERSION :'v1',
	 		KEY : '22360f3a2e03f847acf5339695e42e5b'
	 	},

	 	footerScrtisps :[
	 			
	 		'/js/SeeCode.js'
	 	]	

	 	
	 });
});	



app.listen(3111, function () {
  console.log('Example app listening on port 3111!');
});