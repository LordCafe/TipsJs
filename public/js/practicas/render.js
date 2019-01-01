 const TemplateExample = ( { title , summary , images, url } )=>{
 	let realSummary = summary.substring(0,50);
 	return `
 	<div class="card">
 	<div class="card-image">
 	<img src="${images.principal[0].url}" alt>          
 	</div>
 	<div class="card-content">
 	<p class='truncate'>${title}</p>
 	</div>
 	<div class="card-action">
 	<a href="${url}"> Ver la nota </a>
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
 	fields : ['title', 'summary', 'images', 'url' ],
 	type : ['article','gallerie','gallery','video','videos']
 }


 JsonpApi.limit = 15;



 let InjectNotes = function( note  ){
 	let node = document.createElement( 'div');
 	node.classList.add('col', 's4');
 	node.innerHTML = TemplateExample(note);
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
 })



