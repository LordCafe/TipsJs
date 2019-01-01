 const TemplateExample = ( { title , summary , images, url , num , id  } )=>{
 	let realSummary = summary.substring(0,50);
 	return `
 	<div class="card">
 	<div class="card-image">
 	<img  class='shake' src="${images.principal[0].url}" alt="${title}">          
 	</div>
 	<div class="card-content">
 	<p class='truncate'>${title}</p>
 	 	<div class="card-action">
 	<a href="${url}" alt='${title }'> Ver <span class="new badge" data-badge-caption=" ">${num}</span>
  </a>
 	</div>
 	</div>

 	</div>`;
 };
 let settings ={
 	callbackName : 'PWA',
 	parameters  : {
 		API : 'https://api.invent.mx',
 		REPO : 'nodes.json',      
 		SITE : 'actitudfem',
 		VERSION :'v1',
 		KEY : '22360f3a2e03f847acf5339695e42e5b'
 	}
 }
 const JsonpApi = new ApiImagen( settings );
 let settingsUrl ={
 	fields : ['title', 'summary', 'images', 'url', 'id' ],
 	type : ['article','gallerie','gallery','video','videos']
 }


 JsonpApi.limit = 5;


 let MyNotes = {};
 MyNotes.Notes = {};
 MyNotes.Getdata = function( data, type ){
 	let MyNote = this.Notes[data.id];
 	let All = data.parentElement.querySelectorAll('.demoClass');
 	this.Actions(type , All );	
 	data.classList.remove('opacitycero');
 	
 }
 MyNotes.Each = function(dom , callback  ){
   dom.forEach( function(elem ){
   	  if(typeof callback === 'function'){
   	  	callback( elem);
   	  }
   })
 }
 MyNotes.Actions = function(type, doms){
 	switch (type) {
 		case 'mouseover':
 			this.Each( doms,function( dom ){
 				dom.classList.add('opacitycero');
 			});
 			break;

 		case 'mouseout':
 			this.Each( doms, function(dom ){
 				dom.classList.remove('opacitycero');
 				
 			});
 			break;
 		default:
 			// statements_def
 			break;
 	}
 }




 let InjectNotes = function( note  ){
 	note.num = this.childElementCount + 1;
 	let node = document.createElement( 'div');
 	node.classList.add('col', 's4', 'demoClass');
 	node.id = note.id;
 	node.innerHTML = TemplateExample(note);
 	node.addEventListener( 'mouseover',function(event){
 	 	console.log( event.type)
 	 	MyNotes.Getdata(this, event.type )
 	})

 	node.addEventListener( 'mouseout',function(event){
 	 	console.log( event.type)
 	 	MyNotes.Getdata(this, event.type )
 	})
 	MyNotes.Notes[note.id] = Object.assign( {dom :  node }, note);	
 	this.appendChild( node );
 }

 let EachNote = function( server ){
 	let Notes = server.data;
 	Notes.forEach(InjectNotes, document.getElementById('entry'));
 	let down = document.body.scrollHeight || document.documentElement.scrollHeight;
 	window.scrollTo({
 		top: down,
 		behavior: 'smooth',
 	})

 }

 document.getElementById('searchMoreNotes')
 .addEventListener( 'click',function(){ 	
 	JsonpApi.more(settingsUrl).then(EachNote);
 });





