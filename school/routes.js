module.exports = function(app){

	app.get('/school/dataStructure', function(req, res){
		res.render('school/dataStructure', {
			title: 'Javascript Data Structure',
			links :{
				cybmeta  : 'https://cybmeta.com/var-let-y-const-en-javascript',
				Medium : 'https://medium.com/@sergiodxa/definiendo-conceptos-closure-y-scope-en-javascript-9081f1e113e6'
			},
			
			footerScrtisps :[
			'/js/SeeCode.js',
			'/js/scope/loadClass.js',
			'/js/scope/mycard.js',
			'/js/scope/functions.js',
			'/js/scope/hoisting.js',
			]
		});
	});


	app.get('/school/values', function(req, res){
		res.render('school/values', {
			title: 'Values, Types, and Operators',
			links :{
				cybmeta  : 'https://cybmeta.com/var-let-y-const-en-javascript',
				Medium : 'https://medium.com/@sergiodxa/definiendo-conceptos-closure-y-scope-en-javascript-9081f1e113e6'
			},
			footerScrtisps :[
			'/js/SeeCode.js',
			'/js/scope/loadClass.js',
			'/js/scope/mycard.js',
			'/js/scope/functions.js',
			'/js/scope/hoisting.js',
			]
		});
	});

	app.get('/school/conceptthis', function(req, res){
		res.render('school/this', {
			title: 'Concepto del this',
			links :{
			   yeisondaza : 'https://yeisondaza.com/entendiendo-this-javascript',
			   'youtube' : 'https://www.youtube.com/watch?v=gvicrj31JOM',
			   'https://codeburst.io' : 'https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99'
			},
			footerScrtisps :[
			'/js/SeeCode.js',
			'/js/scope/loadClass.js',			
			]
		});
	});

	app.get('/school/program', function(req, res){
		res.render('school', {
			title: 'Values, Types, and Operators'
		});
	});

	app.get('/school/functions', function(req, res){
		res.render('school', {
			title: 'Values, Types, and Operators'
		});
	});

	app.get('/school/data', function(req, res){
		res.render('school', {
			title: 'Values, Types, and Operators'
		});
	});

    //other routes..
}
