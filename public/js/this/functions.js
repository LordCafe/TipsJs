function Mycar(){
	
	this.model='licoln';
	this.year ='2019';
	this.owner = false;

	
	this.data = function(){
		console.log( 'Este carro es ', this.model, 'Construido en el año : ' , this.year );
		console.log( ' this :',this);

	}



    return this;

}


