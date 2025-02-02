//https://leetcode.com/problems/jewels-and-stones/
function numJewelsInStones(jewels: string, stones: string): number {
    let count = 0;
    for (let jew of jewels){
        for (let rock of stones){
            if (jew === rock){
                count++;
            }
        }
    }
    return count
};