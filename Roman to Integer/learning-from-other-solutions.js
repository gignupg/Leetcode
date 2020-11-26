const obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const elem = obj[s[i]]
        elem < obj[s[i+1]] ? result -= elem : result += elem;
    }

    return Number(result);
};

console.log(romanToInt("MCMXCIV"));