const repeatString = function(string, num) {
    let ans = '';
    if (num < 0) return 'ERROR';
    for (let i = 0; i < num; i++) {
        ans += string;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
