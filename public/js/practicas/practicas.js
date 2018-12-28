const CreateImg = function( data){ 
	let NewImg = document.createElement( 'img');
	NewImg.src =  folderImg+'/'+this.folder+'/' +data;
	this.target.appendChild(NewImg);  
}




function createImges(){
	Personajes.forEach( CreateImg,{ folder : 'personajes', target :  TargetPersonajes});
	Armas.forEach( CreateImg,{ folder : 'armas', target :  TargetArmas});
	Lugares.forEach( CreateImg,{ folder : 'lugar', target :  TargetLugares});	
}


function createImgs (){
	const Settings = Object.assign({}, this.dataset);
	const Target = document.getElementById( Settings.target);
	Settings.target = Target;
	Target.innerHTML ='';
	ClueGame[Settings.info].forEach( CreateImg , Settings );
}

document.querySelectorAll('.clue-practice').forEach(function( elem){
   elem.onclick = createImgs;
})