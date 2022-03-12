function foo(){
    console.log('foo1')
}function foo2(){
    console.log('foo2')
}function foo3(){
    console.log('foo3')
}
function bar(){
    console.log('bar')
}
function wait(){
    console.log('wait');
}
function sleep(func,delay){
    const delayUntil = Date.now()+delay;
    while(Date.now()<delayUntil);
    func();    
}
setTimeout(foo3,20);
setTimeout(foo,10);
setTimeout(foo2,0);
bar();
sleep(wait,1000);
//이 예제의 경우, 