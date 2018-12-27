let Ferrari  = CreateCar.bind({

	model : 'ferrari',
	year : 2011,
	owner : 'Georgie',
	run : function(){
		console.log( 'Este carro ', this.model, 'hace run run ...' );
	},

	stop : ()=>{
		console.log(this);
		console.log('Oh no , no puedo detenerme ...');
	}
});

let Georgie = Ferrari();
Georgie.run();
Georgie.stop();