let lengthArr = Number(prompt("Введіть довжину масиву"));
let arr = [];

for(let i = 0; i < lengthArr; i++){
    arr.push(prompt(`Введіть ${i+1} елемент`));
}
<<<<<<< HEAD
//перша зміна
console.log(arr);

arr.sort((a,b) => a - b );
//друга зміна
=======

console.log(arr);

arr.sort((a,b) => a - b );

>>>>>>> accc0c9c8f215286d98ca120ce653d256cb4b55a
console.log(arr);

let newArr = arr.slice();
newArr.splice(1, 3);
<<<<<<< HEAD
//третя зміна
console.log(newArr);
=======
console.log(newArr);

// let newArr = arr.splice(2, 3);

// console.log(newArr);
>>>>>>> accc0c9c8f215286d98ca120ce653d256cb4b55a
