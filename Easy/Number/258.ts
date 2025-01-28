//https://leetcode.com/problems/add-digits/

function addDigits(num: number): number {
        if (num > 9) {
          let newNum: string = num.toString();
          let result: number = 0;
          for (let n of newNum) {
            result += Number(n);
          }
          return addDigits(result);
        }
        else {
          return num;
        }
};
console.log(addDigits(199))