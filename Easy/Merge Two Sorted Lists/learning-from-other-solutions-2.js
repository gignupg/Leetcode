// recursive solution

// var mergeTwoLists = function (l1, l2) {
//     if (!l1 || !l2) return l1 || l2;
//     const l3 = { val: -1, next: null };
//     let l3Tail = l3;

//     while (l1 && l2) {
//         if (l1.val > l2.val) {
//             [l1, l2] = [l2, l1];
//         }
//         l3Tail.next = l1;
//         l3Tail = l3Tail.next;
//         l1 = l1.next;
//     }

//     l3Tail.next = l2

//     return l3.next;
// };

var mergeTwoLists = function (l1, l2) {
    // base case
    if (!l1 || !l2) return l1 || l2

    // recursive case
    

    return mergeTwoLists()
};


/*
Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
*/