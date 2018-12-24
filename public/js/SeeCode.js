


//Get file with a fetch method
let GetFile =(file, callback)=>{

	fetch(file)
	.then(function(response) {
		const reader = response.text();
		return reader;
	})
	.then(function( file ) {
		if(typeof callback === 'function'){
			callback(file);
		}
	});
}


const GetFileCLick =(event)=>{
	let newFile =  event.textContent;
	GetFile(newFile,function( data ){
		let school = document.querySelector('#school');
		 school.innerHTML = "";
		 school.innerHTML = data;		
		Prism.highlightElement(school);

	});
}