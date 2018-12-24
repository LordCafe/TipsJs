let Scrtips = document.querySelectorAll("script");
let Items = Array.from(Scrtips).map(( Index  )=>{ 	
	let List = `<li class="collection-item" onclick=GetFileCLick(this)>${Index.src}</li>`;
	return List;
});

let Target = document.querySelector(".collection");
Target.insertAdjacentHTML('beforeend',Items);


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