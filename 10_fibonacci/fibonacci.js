const fibonacci = function(fib) {
    let fibs = [1, 1];
    let sum = 0;
    for (let i = 0; i < fib; i++) {
        sum = fibs.at(-1) + fibs.at(-2);
        fibs.push(sum);
    };
    if (fib >= 0) {
        return fibs[fib-1];
    } else if (fib < 0) {
        return "OOPS";
    };
};
// Do not edit below this line
module.exports = fibonacci;
