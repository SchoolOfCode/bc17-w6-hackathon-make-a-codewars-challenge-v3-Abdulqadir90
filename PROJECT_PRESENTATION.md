Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

** PLANNING **

1 - Install Vitest
2 - NPM install, (run npm test)
3 - Add test script to your package.json
"scripts": {
  "test": "vitest"
}

IDEAS

1- Reverse a string 
2- You need to write a function that counts the number of vowels (a, e, i, o, u) in a given string.

Problem Statement:
Write a function that takes a string as input and returns a new string with the characters in reverse order.

TEST CASES

The reverseString("hello world") should return "dlrow olleh"
The reverseString("hello") should return  "olleh"
The reverseString("Hello World") should return "dlroW olleH"
The reverseString("") should return ""
The reverseString("123") should return "321"
The reverseString("Hello World") should return "dlroW olleH"




function reverseString(input) {
// write your solution here!!!!
}

const array = input.split("") // converts the string to array of single characters, this method is called on the input(the argument) this results each character in the string becoming a single element in the array

const reverseArray = array.reverse() // this method reverses the array of characters

const reverseString = reversedArray.join("") // this method joins the reversed array back into a new string

return reveredString // return the new reversed string

Also, reverse input.split(""). reverse(). join("");

WRITING MY KATAS!!

<!-- import { test, expect } from "vitest";
import { checkLength } from "./main.js";

test("should return -1 for strings with an odd length", () => {
  const expected = -1;
  const actual = checkLength("table");
  expect(actual).toBe(expected);
});

test("should return 1 for strings with an even length", () => {
  const expected = 1;
  const actual = checkLength("wizard");
  expect(actual).toBe(expected);
}); -->

- create a filed, reversesString.test.js
- import test, expect from vitest
- import reverseString from ./main.js

test("should return the reversed string", () => {
    expect(reversedString("hello world")).toBe("dlrow olleh"); 
})


..... more test cases

npm run test


