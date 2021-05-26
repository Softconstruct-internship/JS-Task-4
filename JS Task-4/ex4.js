function number(A) {
    let i = 1;
    let sum = Math.pow(4, i);
    while (sum < A) {
        i++;
        sum = Math.pow(4, i);
    }
    return i
}
console.log(number(257))


