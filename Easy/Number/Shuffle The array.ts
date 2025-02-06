function shuffle(nums: number[], n: number): number[] {
    let x: number[] = [];
    let y: number[] = [];
    let result: number[]= [];

    
    

// x1 = 2, x2 = 5, x3 = 1, y1 = 3, y2 = 4, y3 = 7
    for (let i = 0; i - n; i++){
            result.push(nums[i], nums[i + n])
    }
    console.log(x, y)
    return result

};
console.log(shuffle([2,5,1,3,4,7], 3)) //[2,3,5,4,1,7]
