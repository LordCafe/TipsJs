var Mycar = { name: 'lincoln'};

function independent() {
  return this.name;
}

Mycar.f = independent;

console.log(Mycar.f()); // logs 37
