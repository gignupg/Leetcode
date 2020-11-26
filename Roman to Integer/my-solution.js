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


/*
Example 1:
Input: s = "III"
Output: 3

Example 2:
Input: s = "IV"
Output: 4

Example 3:
Input: s = "IX"
Output: 9

Example 4:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


M    C   M    X  C   I V
1000 100 1000 10 100 1 5
[1000, 100, 1000, 10, 100, 1, 5]

*/