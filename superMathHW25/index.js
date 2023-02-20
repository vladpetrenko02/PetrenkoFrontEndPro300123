class SuperMath {
    obj = {
        x : 5,
        y : 10,
        znak : "+"
    }

    input() {
        this.obj.x = +prompt("Введіть число X");
        this.obj.y = +prompt("Введіть число Y");
        this.obj.znak = prompt("Введіть дію над числами (+, -, /, *, %)");

        if(this.obj.znak === "+" || this.obj.znak === "-" || this.obj.znak === "/" || this.obj.znak === "*" || this.obj.znak === "%") {
            console.log("Znak Confirmed");
        } else {
            alert("Операцію над числами обрано неправильно, буде використане додавання.");
            this.obj.znak = "+";
        }
    }

    check() {
        if(confirm("Чи бажаєте Ви виконати операцію над числами з даними значеннями і знаком?")) {
            switch(this.obj.znak){
                case "+":
                    alert(`${this.obj.x} + ${this.obj.y} = ${this.obj.x + this.obj.y}`);
                    break;
                case "-":
                    alert(`${this.obj.x} - ${this.obj.y} = ${this.obj.x - this.obj.y}`);
                    break;
                case "/":
                    alert(`${this.obj.x} / ${this.obj.y} = ${this.obj.x / this.obj.y}`);
                    break;
                case "*":
                    alert(`${this.obj.x} * ${this.obj.y} = ${this.obj.x * this.obj.y}`);
                    break;
                case "%":
                    alert(`${this.obj.x} % ${this.obj.y} = ${this.obj.x % this.obj.y}`);
                    break;
            }
        } else {
            this.input();
            this.check();
        }
    }
}

const supermath = new SuperMath();
supermath.check();