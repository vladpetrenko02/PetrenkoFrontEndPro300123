class SuperMath {

    input(obj) {
        obj.x = +prompt("Введіть число X");
        obj.y = +prompt("Введіть число Y");
        obj.znak = prompt("Введіть дію над числами (+, -, /, *, %)");

        if(obj.znak === "+" || obj.znak === "-" || obj.znak === "/" || obj.znak === "*" || obj.znak === "%") {
            console.log("Znak Confirmed");
        } else {
            alert("Операцію над числами обрано неправильно, буде використане додавання.");
            obj.znak = "+";
        }
    }

    check(obj) {
        if(confirm("Чи бажаєте Ви виконати операцію над числами з даними значеннями і знаком?")) {
            switch(obj.znak){
                case "+":
                    alert(`${obj.x} + ${obj.y} = ${obj.x + obj.y}`);
                    break;
                case "-":
                    alert(`${obj.x} - ${obj.y} = ${obj.x - obj.y}`);
                    break;
                case "/":
                    alert(`${obj.x} / ${obj.y} = ${obj.x / obj.y}`);
                    break;
                case "*":
                    alert(`${obj.x} * ${obj.y} = ${obj.x * obj.y}`);
                    break;
                case "%":
                    alert(`${obj.x} % ${obj.y} = ${obj.x % obj.y}`);
                    break;
            }
        } else {
            this.input(obj);
            this.check(obj);
        }
    }
}

let obj = {
    x : 5,
    y : 10,
    znak : "+"
}

const supermath = new SuperMath();
supermath.check(obj);