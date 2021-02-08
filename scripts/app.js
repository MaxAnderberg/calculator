let tmpValue = "";

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    if(x > y){
            return x - y;
    } else {
            return y - x;
    }
}

function divide(x,y){
    return x / y;
}

function sum (array) {

    const reducer = (total, currentValue) => total + currentValue;
    return array.reduce(reducer,0);
    
}

function multiply (x,y) {
    return x * y;
}

// function multiply (array) {
//     const reducer = (total, currentValue) => total *= currentValue;
//     return array.reduce(reducer);
// }

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

function operator(op,x,y){
    return op(x,y);
}

function setValue(value){
    tmpValue += value;
    displayValue();
    console.log(tmpValue)
}

function displayValue(){
   return document.getElementById("display").innerHTML = `${getNumber()}`;
    
}

function getNumber(){
    return tmpValue;

}

function resetNumber(){
    return tmpValue = 0;
}