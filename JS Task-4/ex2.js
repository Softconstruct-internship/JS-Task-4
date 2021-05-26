function cos(n, x) {
    let sum = 1;
    let pow = 1;
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
        pow = 2 ** i
        sum = sum * ((Math.cos(i * x)) / (pow) * factorial);
        console.log("s", factorial);
    }
    return sum
}
console.log(cos(5, 5))