var romanToInt = function(s) {
    const romanInteger = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const chars = s.split('')
    let maxRight = 0
    const result = chars.reduceRight((acc, char) => {
        const integer = romanInteger[char] 
        if (integer >= maxRight) {
            maxRight = integer
            return acc + integer
        }
        return acc - integer
    }, 0)
    return result
};

console.log(romanToInt("MCMXCIV"));