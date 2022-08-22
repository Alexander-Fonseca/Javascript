function sum(n1, n2){
    var total = n1 + n2;
    return total
}

//função anonima
function myFunc(){
    console.log('Hello');
    return 5;
}

setTimeout(myFunc, 5000);

//callback
setTimeout(function(){
    console.log('abc')
}, 2000);