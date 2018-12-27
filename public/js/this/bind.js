// Usando bind method
let NewCar = CreateCar.bind({
	model : 'volvo',
	year : '2015',
	SeeData : function(){
		console.log(this);
	}
});

let Danny = NewCar();
Danny.SeeData();