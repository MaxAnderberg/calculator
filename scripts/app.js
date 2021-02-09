let tmpValue = "";
let tmpValueX = "";
let tmpValueY = "";
let tmpOpertor = "";
let result = 0;

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
    if(op == "add"){
        result = add(parseInt(x),parseInt(y));
    } else if(op == "subtract"){
        result = subtract(parseInt(x),parseInt(y));
    } else if(op == "divide"){
        result = divide(parseInt(x),parseInt(y));
    } else if(op == "multiply"){
        result = multiply(parseInt(x),parseInt(y));
    }
    displayResult();
}

function setOperator(operator){
    tmpOpertor = operator;
    setXvalue();
    displayOperator();
}

function setXvalue(){
    tmpValueX = tmpValue;
    resetNumber();
}

function setValue(value){
    tmpValue += value;
    displayValue();
}

function displayResult(){
    document.getElementById("display-result").innerHTML = `${result}`;
 }

 function displayOperator(){
    document.getElementById("display-operator").innerHTML = `${tmpOpertor}`;
 }

function displayValue(){
   return document.getElementById("display").innerHTML = `${getNumber()}`;
}

function getNumber(){
    return tmpValue;
}

function equals(){
    operator(tmpOpertor,tmpValueX,tmpValue)
}

function resetNumber(){
    tmpValue = "";
}

function reset(){

    setValue("");
    tmpValue = "";  
    tmpValueX = "";
    tmpValueY = "";
    tmpOpertor = "";
    result = 0;
    displayOperator();
    displayResult();
    displayValue();
}