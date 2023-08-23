function primeNumber (num) {
    if (num > 1000) return "Некорректное число";
    if (num === 0) return  "Число ненатуральное.";
    if (num === 1) return "Один - не простое и не составное.";

    let divisionsCount = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) divisionsCount++;
    }

    if (divisionsCount === 2)
        return "Число простое.";
    else
        return "Число составное.";
}

console.log(primeNumber(17));