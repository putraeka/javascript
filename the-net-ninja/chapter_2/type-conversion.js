// Type conversion

let score = '100';
score = Number(score)

console.log(score + 1);
console.log(typeof score);

let result = Number('hello');

console.log(result);

let result2 = String(50);
console.log(result2, typeof result2);

// Bilangan genap dan ganjil bisa dibuat true, kecuali 0
let result3 = Boolean(100);
console.log(result3, typeof result3);

// String juga true Boolean, tapi empty string adalah false Boolean
let result4 = Boolean('100');
console.log(result4, typeof result4);
