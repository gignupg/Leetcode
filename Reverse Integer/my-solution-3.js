const reverse = function (x) {
    const xStr = Math.abs(x).toString()
    let revNum = "";

    for (let i = xStr.length - 1; i > 0; i--) {
        revNum += xStr[i]
    }

    // Taking care of possible overflow
    if (revNum < -(2**31)/10 || revNum > ((2**31)-1)/10) {
        return 0
    } else {
        revNum += xStr[0]
    }

    return Number(revNum) * Math.sign(x);
};

console.log(reverse(2**30));