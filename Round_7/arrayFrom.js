// 예제 27-29
// 503페이지

const wrongExample = Array.from({ length: 3 }, (i) => i);
const arr = Array.from({ length: 3 }, (_, i) => i);

console.log(wrongExample); // [undefined, undefined, undefined]
console.log(arr); // [0, 1, 2]
