let arr = [ 0, 4, 5, 6, 7, 8, 9, 0];

function countEvenOddZero (arr) {

let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0)  {
        zero++;
    } else {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
}

return [even, odd, zero];
}

let rez = countEvenOddZero(arr);

console.log("Количество четных элементов: " + rez[0]);
console.log("Количество нечетных элементов: " + rez[1]);
console.log("Количество нулевых элементов: " + rez[2]);