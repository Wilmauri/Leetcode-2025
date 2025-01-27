//https://leetcode.com/problems/pascals-triangle/
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
