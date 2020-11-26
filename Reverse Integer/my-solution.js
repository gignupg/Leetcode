const reverse = function (x) {
    let revNum = "";
    const xStr = x.toString()

    for (let i = xStr.length - 1; i >= 0; i--) {
        if (i) {
            revNum += xStr[i]

        } else {
            if (isNaN(xStr[i])) {
                revNum *= -1
            } else {
                revNum += xStr[i] 
            }
        }
    }

    // Taking care of overflow problems
    if (revNum < Math.pow(-2, 31) || revNum > (Math.pow(2, 31) - 1)) {
        return 0;
    }

    return Number(revNum);
};

console.log(reverse(123));


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