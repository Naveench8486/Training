//palindrome
function isPalindrome(str) {
    str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let reversed = str.split("").reverse().join("");

    return str === reversed;
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 