let arr = [];

for(let i = 0; i < 11; i++) {
    arr[i] = i + 10;
}

alert(`1) ${arr.join(", ")}`);

for(i = 0; i < 11; i++) {
    arr[i] = (i + 10)**2;
}

alert(`2) ${arr.join(", ")}`);

console.log("3) Таблиця множення на 7");

for(i = 1; i < 11; i++){
    console.log(`${i} * 7 = ${i*7}`);
} 

for(i = 0; i < 15; i++){
    arr[i] = i + 1;
}

console.log("4) Сума цілих чисел від 1 до 15 =",arr.reduce((sum, item) => sum + item, 0));

for(i = 15; i < 36; i++){
    arr[i] = i + 15;
}

console.log("5) Добуток усіх цілих чисел від 15 до 35 =",arr.reduce((sum, item) => sum * item, 1));

let value = 0;
for(i = 1; i < 501; i++){
    value += i;
}

console.log("6) Середнє арифметичне усіх цілих чисел від 1 до 500 =", value /= 500);

value = 0;
for(i = 30; i < 81; i++) {
    if(i % 2 === 0){
        value += i;
    }
}

console.log("7) Сума всіх парних чисел від 30 до 80 =", value);

arr = [];
for(i = 100; i < 201; i++) {
    if(i % 3 === 0){
        arr.push(i);
    }
}

console.log("8) Числа кратні 3 в діапазоні 100 - 200:", arr);

arr = [];
value = Number(prompt("Введіть натуральне число"));
for(i = 1; i < value + 1; i++){
    if(value % i === 0){
        arr.push(i);
    }
}

alert(`9) Дільники натурального числа ${value} = ${arr}`);

let counter = 0;
let valueNew = 0;
arr.forEach(function(item) {
    if(item % 2 === 0){
        counter++;
        valueNew += item;
    }
});

alert(`10) Кількість парних дільників числа ${value} = ${counter}`);
alert(`11) Сума парних дільників числа ${value} = ${valueNew}`);

arr = [];
console.log("12) Надрукувати повну таблицю множення від 1 до 10.")
for(i = 1; i < 11; i++){
    for(let j = 1; j < 11; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
    


