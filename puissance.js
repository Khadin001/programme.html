function puissance(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base ** exponent;
    }
}
console.log(puissance(2,4));
