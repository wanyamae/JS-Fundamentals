const input = process.argv[2];
const num = parseInt(input, 10);
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}