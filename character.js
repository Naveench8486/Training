// find character count in a string
let str = "hello world";
let target="i";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
        count++;
    }
}
console.log(`Number of '${target}' characters: ${count}`);