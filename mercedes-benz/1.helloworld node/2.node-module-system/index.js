function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function divide(a,b){
    
    if (b==0){
        throw new error('divide by zero is not allowed')
    }

    return a/b
}

Module.exports = {
    add,subtract,divide
}