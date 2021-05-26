function number(n) {
    let sum = ""
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
console.log(number(12034))


