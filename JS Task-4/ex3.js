function number(n) {
    let y = 1;
    let i = 0;
    if (n % 2 === 0) {
        i = 2;
    }
    else {
        i = 1;
    }

    while (i <= n) {
        y = y * i;
        i = i + 2;
    }
    return y
}
console.log(number(11))