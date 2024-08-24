# Question: How do you detect the first non-repeating character in a string stream? JavaScript Summary

The JavaScript console application is designed to detect the first non-repeating character in a string stream. It does this by creating a class named 'Stream' that has two properties: 'index' and 'count'. The 'index' property is an array that stores the characters in the order they are inserted, while the 'count' property is an object that stores the characters as keys and their counts as values. The class has two methods: 'insert' and 'firstNonRepeating'. The 'insert' method takes a character as an argument and checks if it exists in the 'count' object. If it doesn't, it adds the character to the 'count' object with a count of 1 and also adds it to the 'index' array. If it does exist, it increments the count. The 'firstNonRepeating' method iterates over the 'index' array and checks the count of each character in the 'count' object. It returns the first character with a count of 1, or null if no such character exists. The application then creates an instance of the 'Stream' class, iterates over a string, and inserts each character into the stream. After each insertion, it logs the first non-repeating character.

---

# TypeScript Differences

The TypeScript version of the solution uses a different approach to solve the problem compared to the JavaScript version. 

In the JavaScript version, the `Stream` class maintains an `index` array to keep track of the order of the characters inserted and a `count` object to keep track of the count of each character. The `firstNonRepeating` method iterates over the `index` array and returns the first character that has a count of 1.

In the TypeScript version, the `Stream` class maintains an `index` array and a `repeat` array of size 256 (assuming the input is ASCII characters) and a `str` string to keep track of the inserted characters. The `index` array stores the index of the first occurrence of a character in the `str` string, and the `repeat` array stores whether a character has repeated or not. The `insert` method updates the `index` and `repeat` arrays based on the ASCII value of the inserted character. The `firstNonRepeating` method iterates over the `index` and `repeat` arrays and returns the first non-repeating character.

The TypeScript version uses type annotations to specify the types of variables and function return values, which is a feature not available in JavaScript. It also uses the `charCodeAt` method to get the ASCII value of a character, which is not used in the JavaScript version. The TypeScript version also uses the `fill` method to initialize the `index` and `repeat` arrays, which is not used in the JavaScript version. 

Overall, the TypeScript version is more efficient as it uses constant space and time complexity for the `insert` and `firstNonRepeating` methods, while the JavaScript version uses linear space and time complexity for these methods.

---

# C++ Differences

The C++ version of the solution uses similar logic to the JavaScript version, but with different language-specific features and data structures. 

In the JavaScript version, an object (`this.count`) is used to keep track of the count of each character, and an array (`this.index`) is used to keep track of the order of the characters. The `insert` method updates these two data structures, and the `firstNonRepeating` method iterates over the array to find the first character that appears only once.

In the C++ version, an `unordered_map` (`charCount`) is used instead of an object to keep track of the count of each character, and a `queue` (`stream`) is used instead of an array to keep track of the order of the characters. The `insert` method updates these two data structures, and the `firstNonRepeating` method iterates over the queue to find the first character that appears only once.

The main differences between the two versions are due to the different data structures available in JavaScript and C++. In JavaScript, arrays are used for ordered collections of items, while in C++, queues are used. Similarly, JavaScript uses objects for key-value pairs, while C++ uses `unordered_map`.

Another difference is in the way the two versions handle the case where there are no non-repeating characters. The JavaScript version returns `null`, while the C++ version returns the null character (`'\0'`).

Finally, the C++ version includes a `main` function that prompts the user to enter a string, while the JavaScript version uses a hardcoded string.

---
