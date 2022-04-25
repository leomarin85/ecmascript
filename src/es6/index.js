// ##### Parametros Por Defecto. ###### //

// Antes ES6

function newFunction(name,age,country){
  var name = name || 'leonardo';
  var age = age || 36;
  var country = country || 'Colombia';
  console.log(name,age,country);
};

// Con ES6

function newFunction2(name='leonardo', age=36, country='Colombia'){
  console.log(name,age,country);
};

newFunction2();
newFunction2('carlos', 25, 'Peru');

// ###### Templeates Literal ###### //

// Antes ES6

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Con ES6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ###### Multilineas en los Strings ###### //

// Antes ES6

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" 
+ "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

console.log(lorem);

//  Con ES6

let lorem2 = `Lorem Ipsum is simply dummy text
of the printing and typesetting industry.`;
console.log(lorem2);

// ###### Desestructuracion de Elementos ###### //

// Antes ES6

let person = {
  name: 'Carlos',
  age: 36,
  country: 'Colombia'
};

console.log(person.age,person.country);

//  Con ES6

let { age, country } = person;

console.log(age,country);

// ###### Operador de Propagacion. ###### //

// Con Es6
let team1 = ['Carlos','Julio','Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let uniTeam = ['dario',...team1,...team2, 'fernanda'];
console.log(uniTeam);

// ###### LET y CONST ###### //

// Con ES6 LET ()
{
  var globalVar = 'Hola';
}
{
  let globalLet = 'Mundo';
  globalLet = 'Hello';
  console.log(globalLet);
}

console.log(globalVar);

//  Con ES6 CONST (no deja reasignar el valor)

const a = 'b';
a = 'y';
console.log(a);

// ###### Propiedad de objetos Mejorada ###### //

//  Antes de ES6

let name = 'Leonardo';
let age = 36;

obj = {name:name, age:age};
console.log(obj);

//  Con ES6

obj2 = {name, age};

console.log(obj2);

// ###### Arrow Function ###### //

const names = [
  { name: 'Leonardo', age:32 }, { name: 'Carlos', age:40}
];

// Antes de ES6

let listOfNames = names.map(function(item){
  console.log(item.name);
});

//  Con ES6

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name,age,country) => {
  // bloque de codigo
};

const listOfNames4 = name => {
  // bloque de codigo
};

const square = num => num * num;

//  ###### Las Promesas ###### //

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(false){
      resolve('Hey!, todo bien');
    }else{
      reject('Ups!, Salio Mal');
    }
  });
};

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

//  ###### Las Clases ###### //

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA,valueB){
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA +  this.valueB;
  }
};

const calc = new calculator();
console.log(calc.sum(2,2));

// ###### IMPORT y EXPORT ###### //

const hello = require('./index2.js');

console.log(hello());

// ###### GENERATOR ###### //

function* helloWorld(){
  if (true){
    yield 'Hello, ';
  }
  if (true){
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
