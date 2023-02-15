const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(arr, el){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === el){
            arr.splice(i,1);
        }
    }
}