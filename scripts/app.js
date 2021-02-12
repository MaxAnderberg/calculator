let tmpValue = "";
let tmpValueX = "";
let tmpValueY = "";
let tmpOpertor = "";
let result = 0;

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    if(x < 0){
        return x - y
    } else if(x > y){
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

function percent(){

}

function round(num){
    result = Math.round((num + Number.EPSILON) * 10000000) / 10000000
}

function operator(op,x,y){
    if(op == "add"){
        result = add(parseFloat(x),parseFloat(y));
    } else if(op == "subtract"){
        result = subtract(parseFloat(x),parseFloat(y));
    } else if ("divide"){
        result = divide(parseFloat(x),parseFloat(y));
    }else if(op == "multiply"){
        result = multiply(parseFloat(x),parseFloat(y));
    }
    round(result);
    displayResult();
}

function setOperator(operator){
    tmpOpertor = operator;
    setXvalue();
    // displayOperator();
}

function setXvalue(){
    if(result){
        tmpValueX = result;
    } else {
        tmpValueX = tmpValue;
    }
    resetNumber();
}

function setValue(value){
    tmpValue += value;
    displayValue();
}

function displayResult(){
    document.getElementById("display").innerHTML = `${result}`;
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
    // displayOperator();
    displayResult();
    displayValue();
    document.getElementById("display").innerHTML = `0`;

}

function negate(){
    if(!tmpValue){
        return;
    } else {
        const anArray = tmpValue.split("");
        console.log(anArray)
        if(anArray[0] === "-"){
            anArray.shift() // remove the minus sign
            tmpValue = anArray.join("");
        } else {
            anArray.unshift("-"); // add the minus sign
            tmpValue = anArray.join("");
        }
    }
    displayValue();
}

window.addEventListener('keydown', function(e) {

    const button = document.querySelector(`button[data-key="${e.keyCode}"]`)

    if(!button){return;} // if no key-code match stop function

    if(button.attributes[1].value == "188"){
        console.log("this is it broo")
        if(tmpValue.includes(".")){
            console.log("YO")
            const comma = button;
            comma.disabled;
        } else {
            button.click();
            button.classList.add("scale-button")
        }
    } else {
        button.click();
        button.classList.add("scale-button")
    } 
});

function removeTransition(e){
    if(e.propertyName !== "transform"){return;}
    this.classList.remove("scale-button")
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
/* 

*/