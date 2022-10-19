const getTheTitles = function(arr) {
    let title_arr = [];
    for (let i = 0; i < arr.length; i++) {
        title_arr.push(arr[i]['title']);
    }
    return title_arr;
};

// Do not edit below this line
module.exports = getTheTitles;
