function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let join = "";
    let join2 = "";
    for (let words of word1) {
        join += words;
    }
    for (let words of word2) {
        join2 += words;

    }
    if (join === join2) {
        return true
    } else {

        return false
    }
};
