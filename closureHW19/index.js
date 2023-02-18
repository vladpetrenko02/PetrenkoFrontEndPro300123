function makeFnSum(count){
    return function(add){
        return count += add;
    }
}

const sum = makeFnSum(0);

console.log(sum(10));
console.log(sum(8));
console.log(sum(5));