Here is a TypeScript solution for the problem:

```typescript
class Stream {
    private index: number[];
    private repeat: boolean[];
    private str: string;

    constructor() {
        this.index = new Array(256).fill(-1);
        this.repeat = new Array(256).fill(false);
        this.str = '';
    }

    insert(ch: string) {
        if (!this.repeat[ch.charCodeAt(0)]) {
            if (this.index[ch.charCodeAt(0)] === -1) {
                this.index[ch.charCodeAt(0)] = this.str.length;
            } else {
                this.repeat[ch.charCodeAt(0)] = true;
            }
        }
        this.str += ch;
    }

    firstNonRepeating(): string {
        let res = Number.MAX_VALUE;
        for (let i = 0; i < 256; i++) {
            if (this.index[i] !== -1 && !this.repeat[i]) {
                res = Math.min(res, this.index[i]);
            }
        }
        return res === Number.MAX_VALUE ? '#': this.str[res];
    }
}

let stream = new Stream();
stream.insert('a');
console.log(stream.firstNonRepeating());
stream.insert('b');
console.log(stream.firstNonRepeating());
stream.insert('c');
console.log(stream.firstNonRepeating());
stream.insert('a');
console.log(stream.firstNonRepeating());
stream.insert('b');
console.log(stream.firstNonRepeating());
stream.insert('c');
console.log(stream.firstNonRepeating());
```

This program creates a Stream class that keeps track of the first non-repeating character in a string stream. The `insert` method adds a character to the stream and updates the index and repeat arrays. The `firstNonRepeating` method returns the first non-repeating character in the stream. The program then creates a Stream object and inserts characters into it, printing the first non-repeating character after each insertion.