// Using recursion

const countAndSay = function (n) {
    if (n === 1) return "1";

    const str = countAndSay(n - 1);

    // Splitting str where subsequent digits are not the same
    const splitted = str.match(/(\d)\1*/g);

    // Creating the new sequence
    const newSequence = splitted.map(arr => arr.length + arr[0]);

    return newSequence.join("");;
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