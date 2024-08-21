Here is a JavaScript console application that solves the problem:

```javascript
class Stream {
    constructor() {
        this.index = [];
        this.count = {};
    }

    insert(ch) {
        if (!this.count[ch]) {
            this.count[ch] = 1;
            this.index.push(ch);
        } else {
            this.count[ch]++;
        }
    }

    firstNonRepeating() {
        while (this.index.length > 0) {
            if (this.count[this.index[0]] == 1) {
                return this.index[0];
            } else {
                this.index.shift();
            }
        }
        return null;
    }
}

let stream = new Stream();
let str = "hello world";
for (let i = 0; i < str.length; i++) {
    stream.insert(str[i]);
    console.log(`First non-repeating character is: ${stream.firstNonRepeating()}`);
}
```

This console application creates a `Stream` class that keeps track of the characters inserted into it and their counts. It also maintains an index of the characters in the order they were inserted. The `insert` method inserts a character into the stream, and the `firstNonRepeating` method returns the first non-repeating character in the stream. The application then creates a new `Stream` object, inserts the characters of a string into it one by one, and logs the first non-repeating character after each insertion.