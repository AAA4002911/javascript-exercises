const removeFromArray = function(arr, a, b, c, d) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a || (b && arr[i] === b) || (c && arr[i] === c) || (d && arr[i] === d)) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
