/* Given an integer numRows, return the first numRows of 
Pascal's triangle.

In Pascal's triangle, each number is the sum of the 
two numbers directly above it as shown:
Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:
Input: numRows = 1
Output: [[1]] 
Example 3:
input: numrows = 3
output: [[1], [1, 1] [1, 2, 1]]
1 <= numRows <= 30


        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1
 

*/
function generate(numRows: number): number[][] {
    let triangle: number[][] = [[1]];
    if (numRows == 1) {
        return triangle
    }
    
    if (numRows > 1) {
        for (let i = 1; i < numRows; i++) {
            let previousRow = triangle[i - 1];
            let newRow: number[] = [1];
            for (let j = 0; j < numRows; j++) {
                if (j + 1 < previousRow.length) {
                    newRow.push(previousRow[j] + previousRow[j + 1])
                } else {
                    newRow.push(previousRow[j])
                }
            }
            triangle.push(newRow)
        }
    }
    return triangle
};


console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));