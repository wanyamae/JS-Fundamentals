const arr = ["C is fun", "Python is cool", "JavaScript is amazing"];
let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i] + (i < arr.length - 1 ? "\n" : "");
}
console.log(result);