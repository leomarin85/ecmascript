//  ######  DYNAMIC IMPORT  ######  //

const button = document.getElementById("btn");

button.addEventListener("click",async function(){
  const module = await import("./file.js");
  module.hello();
});

//  ###### BIG INT  ######  //

// Antes de ES11

const aBigNumber = 9007199254740991n;

//  Con ES11

const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

//  ###### PROMISE ALL SETTLED  ######  //

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1,promise2,promise3])
  .then(response => console.log(response));

//  ######  GLOBAL THIS  ######  //

console.log(window);
console.log(globalThis);

//  ######  NULLISH COALESCING OPERATOR (??) ######  //

const fooo = null ?? 'default string';

console.log(fooo);
const fooo1 = 'leonardo' ?? 'default string';

console.log(fooo1);

//  ######  OPTIONAL CHAINING (?.) ######  //

const user = {};

console.log(user?.profile?.email);


