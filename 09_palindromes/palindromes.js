const palindromes = function (str) {
    arr = str.toLowerCase().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '.' || arr[i] == ',' || arr[i] == ' ' || arr[i] == '!') {
            arr.splice(i, 1);
            i--;
        }
    }
    
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] != arr[j]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
