var isValid = function (s) {
    const open = ["(", "[", "{"];
    const closed = [")", "]", "}"];
    let openBrackets = [];

    for (let elem of s.split("")) {
        if (open.includes(elem)) {
            openBrackets.unshift(elem);

        } else {
            if (open.indexOf(openBrackets[0]) === closed.indexOf(elem)) {
                openBrackets.shift();

            } else {
                return false;
            }
        }

    }

    return openBrackets.length === 0;
};

console.log(isValid("()[{}](]"));


// Each parentheses that is opened will be pushed to the parenthOpen array

// Each time a bracket is closed we'll check if the last bracket in our array matches
// If it matches the bracket will be removed from the parenthOpen array.

/*
Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true
*/