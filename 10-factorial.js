function factorial(n) {
  if (isNaN(n) || n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}
const num = parseInt(process.argv[2], 10);
console.log(factorial(num));