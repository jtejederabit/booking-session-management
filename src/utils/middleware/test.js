var a = 1;
function x() {
    process.nextTick(function(){
        console.log(a);
        a++;
    });
    return 'done';
}
x();
console.log(x());