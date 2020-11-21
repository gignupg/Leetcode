var isPalindrome = function (x) {
    let num = x;    // Getting a copy of x that we can modify whithout changing x itself
    let revNum = 0;   // The reversed number that's supposed to equal x if it's a palindrome

    if (x === 0) return true

    if (x < 0 || x % 10 === 0) return false;

    while (revNum < x) {
        // Preparing revNum for the last step in our loop
        revNum *= 10;

        // Get the last number of num
        const lastNum = num % 10
        
        // Take off lastNum from num
        num = Math.floor(num / 10)
        
        // Add lastNum to revNum
        revNum += lastNum
    }

    return x === revNum
};

console.log(isPalindrome(10));;


// Example 1:

// Input: x = 121
// Output: true

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:

// Input: x = -101
// Output: false
