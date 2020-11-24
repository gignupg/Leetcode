// This time we'll pretend running into integer overflow problems like we would with Java for example. 
// In fact, we cannot run into these problems because the input in this challenge is limited to 2^31 
// and Javascript can handle numbers up to 2^53 safely. But let's pretend:

var isPalindrome = function (x) {
    let num = x;    // Getting a copy of x that we can modify whithout changing x itself
    let revNum = 0;   // The reversed number that's supposed to equal x if it's a palindrome
 
    if (x === 0) return true

    if (x < 0 || x % 10 === 0) return false;

    // Only checking half the number to prevent integer overflow
    while (num > revNum) {
        // Preparing revNum for the last step in our loop
        revNum *= 10;

        // Get the last number of num
        const lastNum = num % 10
        
        // Take off lastNum from num
        num = Math.floor(num / 10)
        
        // Add lastNum to revNum
        revNum += lastNum
    }

    if (num !== revNum) {
        return num === Math.floor(revNum / 10)
    }

    return num === revNum
};

console.log(isPalindrome(12212));


// How do we know we reached the middle?
// 2579 - 0
// 257 - 9
// 25 - 97 // stop

// 9752 - 0
// 975 - 2
// 97 - 25
// 9 - 257 // stop

// 1221 - 0
// 122 - 1
// 12 - 12 // stop

// 12321 - 0
// 1232 - 1
// 123 - 12
// 12 - 123 // stop


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