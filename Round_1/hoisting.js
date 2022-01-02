/*
양윤상
변수 호이스팅
TDZ, var과 let(const)의 차이
*/

console.log(num); // undefined
var num = 6;

console.log(num2); // Reference Error
const num2 = 6;

console.log(num3); // Reference Error
let num3 = 6;