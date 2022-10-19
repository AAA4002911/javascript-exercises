const findTheOldest = function (arr) {
    let age_arr = [];
    for (let i = 0; i < arr.length; i++) {
        let birth_year = arr[i].yearOfBirth;
        let death_year = arr[i].yearOfDeath;
        if (death_year == undefined || death_year == null) {
            let date = Date().split(' ');
            death_year = parseInt(date[3]);
        }
        let age = death_year - birth_year;
        age_arr.push(age);
    }
    let max = Math.max(...age_arr);
    for (let i = 0; i < age_arr.length; i++) {
        if (max == age_arr[i]) {
            return arr[i];
        }
    }

};

// Do not edit below this line
module.exports = findTheOldest;
