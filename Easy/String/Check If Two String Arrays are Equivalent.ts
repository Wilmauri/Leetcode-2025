//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
   let myJoin = word1.join("");
   let myJoin2 = word2.join("");


   if (myJoin === myJoin2){
    return true
   } else {
    return false}

};
