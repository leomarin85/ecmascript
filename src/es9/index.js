//  ######  OPERADOR DE REPOSO  ###### //

const obj = {
  name: 'leonardo',
  age: 36,
  country: 'Colombia',
};

let { name, ...all } = obj;
let obj2 = all;

console.log(obj2);

//  ######  OPERADOR PROPAGACION  ######  //

const obj = {
  name: 'Leonardo',
  age: 36,
};

const obj1 = {
  ...obj,
  city: 'San Martin',
  country: 'Colombia',
};

console.log(obj1);

// ######  PROMISE.FINALLY  ######  //

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hola Como te Va'), 3000)
      : reject(new Error('Salio Mal'))
  });
};

//  Antes de ES9
helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))

// Con ES9

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))

//  ######  REGEX  ######  //

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-04-24');

const year = match[1];
const mounth = match[2];
const day = match[3];

console.log(year,mounth,day);
