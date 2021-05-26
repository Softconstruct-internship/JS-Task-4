function number(n, m) {
    for (let i = n; i <= m; i++) {
        for (let j = 2; j < m; j++) {
            if (Math.pow(i, j) <= m) {
                console.log(i);
            }
        }
    }
}
number(1, 27)

