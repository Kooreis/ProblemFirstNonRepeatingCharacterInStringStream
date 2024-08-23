insert(ch) {
        if (!this.count[ch]) {
            this.count[ch] = 1;
            this.index.push(ch);
        } else {
            this.count[ch]++;
        }
    }