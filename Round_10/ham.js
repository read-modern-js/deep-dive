const foo = () =>{
    throw Error('foo에서 발생한 에러');
}
const bar= ()=>{
    try{
        foo();
    }
    catch (err) {
        console.log('foo에서 일어났음')
        console.error(err);
    }
}
const baz = ()=>{
    bar();
}
try{
    baz();
}
catch (err) {
    console.log('baz에서 일어났음')
    console.error(err);
}