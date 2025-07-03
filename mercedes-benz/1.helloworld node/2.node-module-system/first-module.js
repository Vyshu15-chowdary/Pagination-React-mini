const FirstModule = require('./first-module');
console.log(FirstModule.add(30,60));

try{

    console.log('trying to divide by zero');
    let result = FirstModule.divide(0,0);
    console.log(result);
}
catch(error){
    console.log('caught an error',error.message);
}