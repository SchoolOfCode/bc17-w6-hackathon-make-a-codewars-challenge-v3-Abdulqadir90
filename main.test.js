import { test, expect } from "vitest";
import { reversedString } from "./main.js";


test("should return the reversed string", () => {
    expect(reversedString("hello world")).toBe("dlrow olleh"); 
});

test("should return strings with special characters", () => {
    expect(reversedString("#123!@£$%^&*")).toBe("*&^%$£@!321#"); 
});

test("should return mixed case letters", () => {
    expect(reversedString("HellO WorLD")).toBe("DLroW OlleH"); 
});




