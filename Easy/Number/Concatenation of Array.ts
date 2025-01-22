//https://leetcode.com/problems/concatenation-of-array/description/

function getConcatenation(nums: number[]): number[] {
    let ans: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i])
        console.log(ans)
    };

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i])
        console.log(ans)
    };
    return ans


};
console.log(getConcatenation([1, 2, 1])) 