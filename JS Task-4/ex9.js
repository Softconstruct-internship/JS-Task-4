function even(n) {

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= i; j++) {
            if ((i % j == 0) && (j != i)) {
                break;
            } else {
                console.log(i);
                break;
            }
        }
    }

}
console.log(even(20))

