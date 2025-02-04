const fibonacci = function(n) {
    if (n < 0) {
        return 'OOPS'
    }
    function fib(n) {
        if (n == 1) return 1;
        if (n == 0) return 0;
        return fib(n - 1) + fib(n - 2);
    }
    return fib(n);
};

// Do not edit below this line
module.exports = fibonacci;
