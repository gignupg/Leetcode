// Easy solution without using hash tables

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const counterpartPos = nums.indexOf(target - nums[i])
        if (counterpartPos !== -1 && counterpartPos !== i) {
            return  [i, counterpartPos]
        }
    }
};

console.log(twoSum([3,2,4], 6))

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