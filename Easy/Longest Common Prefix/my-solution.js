var longestCommonPrefix = function (strs) {
    if (!strs.length || !strs[0]) return ""

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        if (strs.every(e => e[i] === char)) prefix += char;
        else break;
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]));

/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/