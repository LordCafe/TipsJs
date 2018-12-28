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
				'developer.mozilla' : 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this',
			   yeisondaza : 'https://yeisondaza.com/entendiendo-this-javascript',
			   'youtube' : 'https://www.youtube.com/watch?v=gvicrj31JOM',
			   'https://codeburst.io' : 'https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99'
			},
			footerScrtisps :[
			'/js/SeeCode.js',
			'/js/this/functions.js',
			'/js/this/usecar.js',
			'/js/this/bind.js',
			'/js/this/arrow.js'


			]
		});
	});

	app.get('/school/program', function(req, res){
		res.render('school', {
			title: 'Values, Types, and Operators'
		});
	});



	app.get('/school/functions', function(req, res){
		res.render('school/functions', {
			title: 'Concepto del this',
			links :{
			   yeisondaza : 'https://yeisondaza.com/entendiendo-this-javascript',
			   'youtube' : 'https://www.youtube.com/watch?v=gvicrj31JOM',
			   'https://codeburst.io' : 'https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99'
			},
			footerScrtisps :[
			'/js/SeeCode.js',
			'/js/this/functions.js'			
			]
		});
	});


		app.get('/school/methods', function(req, res){
		res.render('school/methods', {
			title: 'Metodos',
			links :{

			},
			footerScrtisps :[
			'/js/SeeCode.js',
			'/js/methods/methods.js'			
			]
		});
	});


	app.get('/school/dom', function(req, res){
		res.render('school/Dom', {
			title: 'DOM',
			links :{
				'Mozilla' : 'https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n'
			},
		});
	});

	app.get('/school/Manipultiondom', function(req, res){
		res.render('school/ManipulationDom', {
			title: 'DOM',
			links :{
				'Mozilla' : 'https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n',
				'sitepoint' :'https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/',
			},
			footerScrtisps :[
			'/js/dom/dom.js',
			'/js/SeeCode.js',
			'/js/dom/show.js'			
			]
		});
	});

	app.get('/school/practicas', function(req, res){
		res.render('school/practicas', {
			title: 'Practica',
			links :{
				'Mozilla' : 'https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n',
				'sitepoint' :'https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/',
			},
			footerScrtisps :[
			'/js/practicas/practicas.js',
						
			]
		});
	});

    //other routes..
}
