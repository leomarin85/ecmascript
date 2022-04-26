// ######  Object.entries  ###### //

const data = {
  frontend: 'Carlos',
  backend: 'Leonardo',
  design: 'Alejandra'
};

const entries = Object.entries(data);

console.log(entries);

// ###### Object.values ###### //

const data2 = {
  frontend: 'Carlos',
  backend: 'Leonardo',
  design: 'Alejandra'
};

const values = Object.values(data2);

console.log(values);

//  ###### PADING ######  //

const string = 'Leo';
const stringCompleto = string.padEnd(8,'nardo');
const stringInicio = string.padStart(8,'Hola ');
console.log(stringCompleto);
console.log(stringInicio);

//  ######  ASYNC & AWAIT  ######  //

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

//  Forma Correcta de Ejecutar los Manejos de Errores.

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error)    
  }
}
anotherFunction();
