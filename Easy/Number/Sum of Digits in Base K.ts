//https://leetcode.com/problems/sum-of-digits-in-base-k/description/?envType=problem-list-v2&envId=math

function sumBase(n: number, k: number): number {
    let numb = 0;
    let toString = n.toString(k).split('');
    toString.map(num => {
        numb += Number(num)
    })
    return numb
};