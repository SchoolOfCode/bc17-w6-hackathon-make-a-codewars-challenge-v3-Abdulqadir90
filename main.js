// Problem Statement:

// Write a function that takes a string as input and returns a new string with the characters in reverse order.

// The reverseString("hello world") should return "dlrow olleh"
// The reverseString("123") should return "321"

// export function reversedString(input) {
//     // write your solution here!!!!
//     }


// Problem Statement:

// Write a function named vowelCounter that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string. The function should be case-insensitive and handle both uppercase and lowercase vowels.

// vowelCounter("Hello World") should return "3" ("e", "o", "o")

export function vowelCounter(input) {
    const vowels = "aeiou";
    let sum = 0;

    for (let i=0; i <input.length; i++){
        if (vowels.includes[i]){
            sum++
        }
    }
    return sum;

}
