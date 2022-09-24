const sumAll = function (start, stop) {
    if (stop < start) {
        let temp = stop;
        stop = start;
        start = temp;
    }
    if (start > 0 && stop > 0 && typeof(stop) === 'number') {
        for (let i = start + 1; i <= stop; i++) {
            start += i;
        }
        return start;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
