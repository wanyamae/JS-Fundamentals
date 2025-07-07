const n = parseInt(process.argv[2], 10);
if (isNaN(n)) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += "C is fun\n";
  }
  if (n > 0) {
    console.log(output.slice(0, -1));
  }
}