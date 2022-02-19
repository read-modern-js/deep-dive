console.log(Number.EPSILON);
console.log(Math.abs(4.12312414) - Math.abs(3.1231244233) < Number.EPSILON);

console.log(Number.parseInt(Number.EPSILON));

console.log(Number.parseInt(0.1));
console.log(Number.parseInt(0.01));
console.log(Number.parseInt(0.001));
console.log(Number.parseInt(0.0001));
console.log(Number.parseInt(0.00001));
console.log(Number.parseInt(0.000001));
console.log(Number.parseInt(0.0000001));
console.log(0.0000001);

console.log(13 * 0.1);
console.log(14 * 0.1);
console.log(15 * 0.1);

function round(num, offset = 0) {
  const mul = Math.pow(10, offset > 0 ? 1 - offset : -offset);
  return Math.round(num / mul) * mul;
}

console.log(round(1.3123123, 2));
console.log(round(1.423, 2));
console.log(14e3);
console.log(14e-5);

function newRound(num, offset = 0) {
  const e = (num, p) => Number(num + "e" + p);
  const pos = offset > 0 ? offset - 1 : offset;
  return e(Math.round(e(num, pos)), -pos);
}

console.log(newRound(1.423, 2));
// 출처: https://min9nim.vercel.app/2020-10-23-js-number-issue/
