let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas)
console.log(ninjas[1])

ninjas[1] = 'ken';
console.log(ninjas[1])

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shaun', 'cristal', 30, 20];
console.log(random);

// Array properties
console.log(ninjas.length) // how many elements inside it

// Array methods

// Join elements inside array
let arMethod = ninjas.join(',')
console.log(arMethod)

// # indexOf() menampilkan index keberapa dari sebuah value
let arMethodIndex = ninjas.indexOf('chun-li');
console.log(arMethodIndex)

// concat() join two array together
let arMethodConcat = ninjas.concat(['bulma', 'sub-zero']);
console.log(arMethodConcat)