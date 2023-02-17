//first task
const arr = [null, undefined, "test", 10, "20", 30, 100];

const answer = calcMean(arr);
console.log("Середнє арифметичне масиву =", answer);

function calcMean(array) {
    let count = 0;
    let sum = array.reduce((accumulator, item) => {
        if(typeof item === "number"){
            count++;
            return accumulator + item;
        }
        return accumulator;
    }, 0)
    return (sum / count);
}

//second task
const a = +prompt("Введіть перше число");
const b = +prompt("Введіть друге число");
const zn = prompt("Оберіть операцію над числами(+, -, *, /, %, ^)");

doMath(a, zn, b);

function doMath(x, znak, y){
    switch(znak){
        case "+":
            alert(`${x} + ${y} = ${x + y}`);
            break;
        case "-":
            alert(`${x} - ${y} = ${x - y}`);
            break;
        case "*":
            alert(`${x} * ${y} = ${x * y}`);
            break;
        case "/":
            alert(`${x} / ${y} = ${x / y}`);
            break;
        case "%":
            alert(`${x} % ${y} = ${x % y}`);
            break;
        case "^":
            alert(`${x}^${y} = ${x**y}`);
            break;
        default:
            alert("Операцію над числами обрано неправильно");
            break;
    }
}

//third task
let twoDimensionalArray = [];
const m = +prompt("Введіть кількість стовпців");
const n = +prompt("Введіть кількість рядків");

create2DArr(m,n);

function create2DArr(x, y){
    for(let i = 0; i < x; i++){
        twoDimensionalArray[i] = [];
        for(let j = 0; j < y; j++){
            twoDimensionalArray[i][j] = prompt(`Елемент [${i}][${j}] дорівнюватиме`);
        }
    }
    alert(twoDimensionalArray);
}

//fourth task
const str = prompt("Введіть рядок");
const delSymb = prompt("Введіть підряд символи, які бажаєте видалити");

delSymbols(str, delSymb);

function delSymbols(string, symbols){
    string = string.split("");
    symbols = symbols.split("");
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < symbols.length; j++) {
            if(string[i] === symbols[j]) {
                string.splice(i,1);
            }
        }
    }
    alert(`Отримуємо ${string.join("")}`);
}
