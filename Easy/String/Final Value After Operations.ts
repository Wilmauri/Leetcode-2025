//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

function finalValueAfterOperations(operations: string[]): number {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "X++"|| operations[i] == "++X") {
            x++;
        } else if (operations[i] == "--X"|| operations[i] == "X--") {
            x--;
        }
    }
    return x
}
console.log(finalValueAfterOperations(["--X", "X++", "X++"])) //2
console.log(finalValueAfterOperations(["++X", "X--", "X++"])) //2
