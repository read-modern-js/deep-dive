// 예제 14-07
var Counter = (function() {
    // private 변수
    var num = 0;

    return {
        increase(){
            return ++num;
        },
        decrease(){
            return --num;
        }
    }
}());

console.log(Counter.num) // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
