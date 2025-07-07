# JS-Fundamentals

This project contains a series of JavaScript scripts demonstrating basic Node.js concepts. Each script can be run using Node.js from the command line. Below are the steps taken and the expected outcomes for each file.

## How to Run

1. Open a terminal in the project directory.
2. Run any script using:
   ```
   node <filename.js> [arguments]
   ```
   Replace `<filename.js>` with the script name and `[arguments]` with any required arguments.

---

## Script Descriptions & Outcomes

### 1-multi_languages.js
**Description:** Prints three lines, each a different message.
**Run:**
```
node 1-multi_languages.js
```
**Output:**
```
C is fun
Python is cool
JavaScript is amazing
```

### 2-arguments.js
**Description:** Prints a message depending on the number of arguments passed.
**Run & Output:**
```
node 2-arguments.js           # No argument
node 2-arguments.js Best      # Argument found
node 2-arguments.js Best School # Arguments found
```

### 3-value_argument.js
**Description:** Prints the first argument passed, or 'No argument' if none.
**Run & Output:**
```
node 3-value_argument.js      # No argument
node 3-value_argument.js School # School
```

### 4-concat.js
**Description:** Prints two arguments in the format: "<arg1> is <arg2>".
**Run & Output:**
```
node 4-concat.js c cool       # c is cool
node 4-concat.js c           # c is undefined
node 4-concat.js             # undefined is undefined
```

### 5-to_integer.js
**Description:** Prints 'My number: <integer>' if the argument is an integer, otherwise 'Not a number'.
**Run & Output:**
```
node 5-to_integer.js          # Not a number
node 5-to_integer.js 89       # My number: 89
node 5-to_integer.js "89"     # My number: 89
node 5-to_integer.js 89.89    # My number: 89
node 5-to_integer.js School   # Not a number
```

### 6-multi_languages_loop.js
**Description:** Prints three lines using an array and a loop, with only one console.log.
**Run:**
```
node 6-multi_languages_loop.js
```
**Output:**
```
C is fun
Python is cool
JavaScript is amazing
```

### 7-multi_c.js
**Description:** Prints 'C is fun' x times, where x is the first argument. If not a number, prints 'Missing number of occurrences'.
**Run & Output:**
```
node 7-multi_c.js 2           # C is fun\nC is fun
node 7-multi_c.js 5           # C is fun (5 times)
node 7-multi_c.js             # Missing number of occurrences
node 7-multi_c.js -3          # (prints nothing)
```

### 8-square.js
**Description:** Prints a square of size x using 'X', where x is the first argument. If not a number, prints 'Missing size'.
**Run & Output:**
```
node 8-square.js              # Missing size
node 8-square.js School       # Missing size
node 8-square.js 2            # XX\nXX
node 8-square.js 6            # XXXXXX (6 lines)
node 8-square.js -3           # (prints nothing)
```

### 9-add.js
**Description:** Prints the sum of two integers passed as arguments. If missing or invalid, prints NaN.
**Run & Output:**
```
node 9-add.js                 # NaN
node 9-add.js 1               # NaN
node 9-add.js 1 7             # 8
node 9-add.js 13 89           # 102
```

---

## Notes
- All scripts use only `const` and `let` (no `var`).
- All output is printed using `console.log`.
- Scripts are designed for Node.js and may not work in browsers.
