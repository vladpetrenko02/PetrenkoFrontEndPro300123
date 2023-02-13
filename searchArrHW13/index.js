let arr = [16, -37, 54, -4, 72, -56, 47 , 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let counter = 0;
let value = arr.reduce(function(accumulator, item){
    if(Number(item) > 0){
        counter++;
        return accumulator + item;
    } 
    else{
        return accumulator;
    }
}, 0);

alert(`1) Сума додатніх значень масиву: ${value}\nКількість додатніх чисел: ${counter}`);

let al = arr.length;
let minimum = arr[al-1];
while (al--){
    if(arr[al] < minimum){
        counter = al;
        minimum = arr[al];
    }
}

alert(`2) Значення мінімального елементу масиву = ${minimum}\nЙого порядковий номер ${counter+1}`);

al = arr.length;
let maximum = arr[al-1];
while (al--){
    if(arr[al] > maximum){
        counter = al;
        maximum = arr[al];
    }
}

alert(`3) Значення максимального елементу масиву = ${maximum}\nЙого порядковий номер ${counter+1}`);

counter = 0;
arr.forEach(function(item){
    if(item < 0){
        counter++;
    }
})

alert(`4) Кількість негативних елементів ${counter}`);

counter = 0;
arr.forEach(function(item){
    if(item % 2 !== 0 && item > 0){
        counter++;
    }
})

alert(`5) Кількість непарних позитивних елементів ${counter}`);

counter = 0;
arr.forEach(function(item){
    if(item % 2 === 0 && item > 0){
        counter++;
    }
})

alert(`6) Кількість парних позитивних елементів ${counter}`);

value = arr.reduce(function(accumulator, item){
    if(item % 2 === 0 && item > 0){
        return accumulator + item;
    } 
    else{
        return accumulator;
    }
}, 0);

alert(`7) Сума парних позитивних елементів ${value}`);

value = arr.reduce(function(accumulator, item){
    if(item % 2 !== 0 && item > 0){
        return accumulator + item;
    } 
    else{
        return accumulator;
    }
}, 0);

alert(`8) Сума непарних позитивних елементів ${value}`);

value = arr.reduce(function(accumulator, item){
    if(item > 0){
        return accumulator * item;
    } 
    else{
        return accumulator;
    }
}, 1);

alert(`9)Добуток позитивних елементів ${value}`);

for(i = 0; i < arr.length; i++) {
    if(arr[i] === maximum){
        continue;
    }
    else{
        arr[i] = 0;
    }
}

alert(`10) Найбільший елемент масиву = ${maximum}\nМасив після обнулення інших значень ${arr}`);