function sin(N, x) {
    let sum = 0
    for (let i = 1; i <= N; i++) {
        sum += sum + Math.pow(Math.sin(i), i) * x
    }
    console.log(sum);
}
sin(3, 2)
