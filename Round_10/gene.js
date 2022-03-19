function* genFunc(){
    const x = yield 1; // 의미가 있는 코드일까?
    console.log(x); // 무슨 값일까?
    const y = yield (x+10);
    return x+y; // yield x+y와 의미상으로 동일한 코드일까? 혹은 generator.return(undefined)랑 차이가 있나?
}
const generator = genFunc();
console.log(generator);
let res = generator.next();
console.log(res);
res = generator.next(10);
console.log(res);
res = generator.next(20);
console.log(res);
res = generator.next(30);
console.log(res);
