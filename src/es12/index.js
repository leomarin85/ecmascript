//  ######  REPLACE ALL  ######  //

const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";

const replaceString = string.replace("Javascript", "Python");

console.log(replaceString);

const replaceAllString = string.replaceAll("Javascript", "Python");
console.log(replaceAllString);

//  ######  METODOS PRIVADOS  ######  //

class Message {
  show(val) {
    console.log(val);
  }
};
const message = new Message();

message.show('Leonardo'); 

//  ######  PROMISE ANY  ######  //

const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));
const promise4 = new Promise((resolve,reject) => reject("4"));
const promise5 = new Promise((resolve,reject) => resolve("5"));

Promise.any([promise1,promise2,promise3,promise4,promise5])
  .then(response => console.log(response));

//  ######  WEAK REF  ######  //

class AnyClass {
  constructor(eleme)
  this.ref = new WeeakRef(eleme)
};

//  ######  NUEVO OPERADORES LOGICOS  ######  //

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;

console.log(isTrue2 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;

console.log(isTrue3 ??= isFalse3);

