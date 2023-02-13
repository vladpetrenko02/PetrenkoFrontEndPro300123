let lengthArr = Number(prompt("Введіть довжину масиву"));
let arr = [];

for(let i = 0; i < lengthArr; i++){
    arr.push(prompt(`Введіть ${i+1} елемент`));
}
//перша зміна
console.log(arr);

arr.sort((a,b) => a - b );
//друга зміна
console.log(arr);

let newArr = arr.slice();
newArr.splice(1, 3);
//третя зміна
console.log(newArr);
