var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    const length = strs.length;

    if (!length || !prefix) return "";

    for (let word of strs) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flower","flower"]));

/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/