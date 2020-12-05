const countAndSay = function (n) {
    let res = [["1"]];

    for (let i = 0; i < n - 1; i++) {
        const newRes = [];

        // Adding the new values
        for (let j = 0; j < res.length; j++) {
            newRes.push(res[j].length.toString());
            newRes.push(res[j][0]);
        }

        const newSortedRes = [];
        let tempArr = [newRes[0]];

        // Sorting the new values
        for (let j = 1; j <= newRes.length; j++) {
            const val = newRes[j];

            if (tempArr[tempArr.length - 1] === val && newRes.length !== j) {
                tempArr.push(val);

            } else {
                newSortedRes.push(tempArr);
                tempArr = [val];
            }
        }

        // Updating res
        res = newSortedRes;
    }

    // Converting to desired format and returning
    return [].concat(...res).join("");
};

console.log(countAndSay(4));

/*
Example 1:
Input: n = 1
Output: "1"
Explanation: This is the base case.

Example 2:
Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

Constraints:
1 <= n <= 30
*/