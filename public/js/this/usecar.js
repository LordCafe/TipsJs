Mycar();// this sera window
let AdrianCar = new Mycar(); //this sera la  instancia;
AdrianCar.data();


function seeThis(){
  console.log(this);
}

console.log(seeThis());
let MiguelCar =  Mycar.bind({ type: 'no sirve', see : seeThis});

 let miguel = MiguelCar();
 miguel.see();