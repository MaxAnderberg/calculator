function add (x, y) {
    return x + y;jasmin
}

function subtract (x, y) {
    if(x > y){
            return x - y;
    } else {
            return y - x;
    }
}

function sum (array) {

    const reducer = (total, currentValue) => total + currentValue;
    return array.reduce(reducer,0);
    
}

function multiply (array) {
    const reducer = (total, currentValue) => total *= currentValue;
    return array.reduce(reducer);
}

function power(x, y) {
    return Math.pow(x,y)
}

function factorial(num) {
    if(num < 0){
            return -1;
    } else if (num === 0 || num === 1){
            return 1;
    } else {
            return (num * factorial(num - 1))
    }
}