//https://leetcode.com/problems/detect-capital/

function detectCapitalUse(word: string): boolean {
    let isGood = true;
    let firstLetterCap = true;
    let secondLetterCap = true;
    for (let i = 0; i < word.length; i++) {
        const actualChar = word[i];
        let actualCharCaps = (actualChar === actualChar.toUpperCase());
        if (i === 0) {
            firstLetterCap = actualCharCaps;
        } else if (i === 1) {
            secondLetterCap = actualCharCaps;
            if (!firstLetterCap && secondLetterCap) {
                isGood = false;
            }
        } else {
            // Valida las demás posiciones
            if (firstLetterCap && !secondLetterCap) {
                // Caso: Primera letra mayúscula, segunda minúscula, las demás deben ser minúsculas
                if (actualCharCaps) {
                    isGood = false;
                    break;
                }
            } else if (!firstLetterCap || (firstLetterCap && secondLetterCap)) {
                // Caso: Todas deben ser mayúsculas o todas deben ser minúsculas
                if (actualCharCaps !== secondLetterCap) {
                    isGood = false;
                    break;
                    }
                }
            }
        }
    return isGood
};
console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('leetcode'));
console.log(detectCapitalUse('Google'));
console.log(detectCapitalUse('sSs'));
console.log(detectCapitalUse('"FlaG"'));