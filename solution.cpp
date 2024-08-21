```cpp
#include <iostream>
#include <queue>
#include <unordered_map>
using namespace std;

class CharStream {
    queue<char> stream;
    unordered_map<char, int> charCount;

public:
    void insert(char ch) {
        charCount[ch]++;
        stream.push(ch);
    }

    char firstNonRepeating() {
        while (!stream.empty() && charCount[stream.front()] > 1) {
            stream.pop();
        }
        if (stream.empty()) {
            return '\0';
        }
        return stream.front();
    }
};

int main() {
    CharStream cs;
    string str;
    cout << "Enter a string: ";
    cin >> str;
    for (char ch : str) {
        cs.insert(ch);
        char firstNonRepeat = cs.firstNonRepeating();
        if (firstNonRepeat == '\0') {
            cout << "No non-repeating character found.\n";
        } else {
            cout << "First non-repeating character: " << firstNonRepeat << '\n';
        }
    }
    return 0;
}
```