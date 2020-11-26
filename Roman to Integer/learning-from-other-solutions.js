var romanToInt = function (s) {
    // Converting the input (roman numberals) to an array of integers
    const arr = [];
    const obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    s.split("").forEach(numeral => {
        arr.push(obj[numeral])
    })

    // Counting the array of integers
    let res = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = arr[i]
        const next = arr[i-1]

        if (curr > next) {
            res += curr - next;
            i--;

        } else {
            res += curr;
        }
    }

    return Number(res)
};

console.log(romanToInt("MCMXCIV"));