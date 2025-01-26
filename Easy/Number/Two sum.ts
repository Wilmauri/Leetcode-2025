//https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {

    for (let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target){
                return ([i, j])
            }

        };
        
    };


    return []
};
console.log(twoSum([14, 11, 8, 1, 7, 2], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2, 3, 4, 3, 5, 2, 1], 6))

