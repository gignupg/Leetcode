var romanToInt = function(s) {
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const arr = s.split('')
    let prev = 0;

    return arr.reduceRight((acc, char) => {
        const val = obj[char]

        if (prev <= val) {
            prev = val;
            return acc + val
        } else {
            prev = val;
            return acc - val
        }
    }, 0)
};

console.log(romanToInt("MCMXCIV"));