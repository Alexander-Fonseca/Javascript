

//callback
setTimeout(function(){
    console.log('abc')
}, 2000);


//arrow functions
setTimeout(() => {
    console.log('def')
}, 2000);


//arrow function com 1 parametro

myFunc( myFunc2 => 10 + 5);