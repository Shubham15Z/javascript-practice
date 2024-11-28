const str = "hello";
const str1 = "racecar";

function checkPalindrom(string) {
    const revString = string.split("").reverse().join("");
    return string === revString;
};

console.log(checkPalindrom(str));
console.log(checkPalindrom(str1));