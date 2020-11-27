// Using a Two-pass Hash Table for better performance.

var twoSum = function (nums, target) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        // Populating our hashTable. Storing nums[i] as key and i as value.
        hashTable[nums[i]] = i;
    }

    // Finding the complementary number in nums and returning the index of the two numbers that add up to form "target".
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (hashTable[complement] && hashTable[complement] !== i) {
            return [i, hashTable[complement]]
        }
    }
};

console.log(twoSum([3, 2, 4], 6));

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]