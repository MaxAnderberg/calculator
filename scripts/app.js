let tmpValue = "", tmpValueX = "", tmpValueY = "", tmpOpertor = "";
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

function percentage(){
    result = (tmpValueX/100);
    displayResult();
}

function multiply (x,y) {
    return x * y;
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

// rounds the number
function round(num){
    result = Math.round((num + Number.EPSILON) * 10000000) / 10000000
}

// calls the appropriate operator based on choosen operator
function operator(op,x,y){
    console.log(op)
    if(op == "add"){
        result = add(parseFloat(x),parseFloat(y));
    } else if (op == "subtract"){
        result = subtract(parseFloat(x),parseFloat(y));
    } else if ( op == "divide"){
        result = divide(parseFloat(x),parseFloat(y));
    } else if (op == "multiply"){
        result = multiply(parseFloat(x),parseFloat(y));
    }
    round(result);
    displayResult();
}
 
function setOperator(operator){
    tmpOpertor = operator;
    setXvalue();
}

function setXvalue(){
    if(result){
        tmpValueX = result;
    } else {
        tmpValueX = tmpValue;
    }
    resetNumber();
}

// adds the value selected value in the calculator and update the display with the current value
function setValue(value){
    tmpValue += value;
    displayValue();
}

function displayResult(){
    document.getElementById("display").innerHTML = `${result}`;
 }

 // display the current value
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

// reset the calculator
function reset(){
    tmpValue = "";
    tmpValueX = "";
    tmpValueY = "";
    tmpOpertor = "";
    result = 0;
    displayResult();
    displayValue();
    document.getElementById("display").innerHTML = `0`;
}

// turns the value in the display to negative or back to positive if the display value already contains '-'
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

// add event listeners to all the buttons, and the css scale-button class  
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

// removes the scale-button class when the transform is done
function removeTransition(e){
    if(e.propertyName !== "transform"){return;}
    this.classList.remove("scale-button")
}

// add transitionend event listener to remove the scale-down class
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener("transitionend", removeTransition))