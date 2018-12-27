 let MyMagicObject = {
		myObject : 'Sombrero magico',//propiedad
		wow : function(){
			console.log(this.myObject);
			console.log(this === window , this);
		}//metodo

	}