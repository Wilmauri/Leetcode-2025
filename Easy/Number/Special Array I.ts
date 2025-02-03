//https://leetcode.com/problems/special-array-i/description/
function isArraySpecial(nums: number[]): boolean {

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] % 2 === 1 && nums[i + 1] % 2 === 1
            || nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) {
            return false
        }

    }
    return true
};
