let data = 42;

data = 10;

interface iCar {
  color: string;
  model: string;
  topSpeed?: number;
}

const car1: iCar = {
  color: 'blue',
  model: 'BMW'
}
const car2: iCar = {
  color: 'red',
  model: 'Mercedes',
  topSpeed: 100
}

