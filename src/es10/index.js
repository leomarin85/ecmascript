//  ######  Array.flat()  ######  //

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array); 
console.log(array.flat(2));

//  ###### Array.flatMap()  ######  //

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value,value * 2]));

//  ######   Array.trimStart()  ######  //

let hello = '    hello world';
console.log(hello.trimStart());

//  ######   Array.trimEnd()  ######  //

let hello2 = 'hello World     ';
console.log(hello2.trimEnd());

//  ######   Optional Catch Building  ######  //

//  Antes de ES10

try {

}catch (error) {
  error
};

//  Con ES10

try {

}catch {
  error
}

//  ######   Object.fromEntries()  ######  //

let entries = [['name','leonardo'],['age',32]];

console.log(Object.fromEntries(entries));

//  ######  Symbol.prototype.description  ######  //

let mySymbol = 'My Symbol';

let symbol = Symbol(mySymbol);
console.log(symbol.description);
