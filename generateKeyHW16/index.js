const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);

function generateKey(len, str) {
    let result = "";
    for(let i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * str.length)];
    }
    return result;
}