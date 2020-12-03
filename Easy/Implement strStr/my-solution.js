var strStr = function (haystack, needle) {
    if (!needle) return 0;

    const len = haystack.length - needle.length

    for (let i = 0; i <= len; i++) {
        if (haystack[i] === needle[0]) {
            let matchCount = 0;
            for (let j = 0; j < needle.length; j++){
                if (haystack[i + j] === needle[j]) {
                    matchCount++;
                } else {
                    break;
                }
            }
            if (matchCount === needle.length) return i
        }
    }

    return -1;
};


/*
Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0

Constraints:
0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
*/