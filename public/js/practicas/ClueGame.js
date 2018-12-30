const folderImg = '/img/clue';
let ClueGame = {}
ClueGame.Personajes =[
'azulino.png',
'blanki.png',
'moradillo.png',
'mostaza.png',
'scarlet.png',
'verdi.png',
]


ClueGame.Armas = [
'candelabro.png',
'daga.png',
'llave_inglesa.png',
'pistola.png',
'soga.png',
'tuberia.png',
];

ClueGame.Lugares = [
'baño.png',
'cocina.png',
'comedor.png',
'estudio.png',
'garage.png',
'habitacion.png',
'patio.png',
'sala.png',
'salon-de-juegos.png'
];

ClueGame.ClickImage = function(){
	this.classList.add('pulse');
	let Dump = ClueGame.Dump.querySelector(`[data-dump=${this.parentNode.dataset.dump}]`);
	//this.removeEventListener( 'click',ClueGame.ClickImage)
	Dump.appendChild(this);

}

ClueGame.CreateImg = function( nameImage){ 
	let NewImg = document.createElement( 'img');
	NewImg.src =  folderImg+'/'+this.folder+'/' +nameImage;
	NewImg.addEventListener( 'click', ClueGame.ClickImage);	
	this.target.appendChild(NewImg);  
}

ClueGame.See = function(){
	console.log(this);
}

ClueGame.ClickButton =function ( ){
	const Settings = Object.assign({}, this.dataset);
	const Target  = document.getElementById( this.dataset.target);
	Settings.target = Target;
	Target.innerHTML ='';						
	ClueGame[Settings.info].forEach( ClueGame.CreateImg , Settings );			

}

