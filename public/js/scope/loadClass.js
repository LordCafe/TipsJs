let ClassScripts = document.querySelectorAll('code');
let SetFolder = '/js/scope/'

Array.from(ClassScripts).map(( data )=>{
	if(data.dataset.script){
		let myfile = SetFolder + data.dataset.script;
		GetFile(myfile,function( script ){		
         data.innerHTML = script;
         Prism.highlightElement( data );
		});		
	}
});