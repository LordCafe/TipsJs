function CreateCar(){
	return this;
}
console.log(CreateCar());// this === window;


let MichaleCar = new CreateCar();
console.log(MichaleCar); // this  === CreateCar;

