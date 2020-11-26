const reverse = function (x) {
    const revNum = Math.abs(x).toString().split("").reverse().join("");

    // I'll deal properly with overflow in my-solution-3.js. For now, this will do.
    return revNum > 2 ** 31 - 1 ? 0 : Number(revNum) * Math.sign(x);
};

console.log(reverse(-123));

/*
Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0

*/