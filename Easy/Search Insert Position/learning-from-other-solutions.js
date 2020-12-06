// Binary-search

const searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    function binarySearch(start, end) {
        let mid = Math.floor((end + start) / 2);
        const guess = nums[mid];

        if (end < start) return start
        if (guess === target) return mid;

        if (target < guess) return binarySearch(start, --mid);
        if (target > guess) return binarySearch(++mid, end);
    }

    return binarySearch(start, end);
};


console.log(searchInsert([1, 3, 5, 6], 5));


/*
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:
Input: nums = [1,3,5,6], target = 0
Output: 0

Example 5:
Input: nums = [1], target = 0
Output: 0

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/