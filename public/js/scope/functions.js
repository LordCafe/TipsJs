//Cambiando mi carro con una funcion;
function seelocal(){
 	console.log(yourCar, MylocalVariable);
}

function changeCars(){
	//Esta funcion tiene un local scope propio.
	var MylocalVariable = 'Yo queria un avion :(';//->local variable
	yourCar = 'Audi';	
	myCar  = 'ferrari';
	
	function SeeMyLocal(){
		console.log(yourCar, MylocalVariable);
	}
	SeeMyLocal();	
}

function changehisCard(){	
	hisCar = 'BMW';
	console.log(hisCar);
}

function changeNowhisCard(){	
	const hisCar = 'BMW';
	console.log(hisCar);	
}


