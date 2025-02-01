//https://leetcode.com/problems/palindrome-number/description/
function isPalindrome(x: number): boolean {
let result = [];
let nCopy = x;
while (x > 0){
    result.push(x % 10)
    x = Math.floor(x / 10)
}
return Number(result.join("")) === Math.abs(nCopy)
};