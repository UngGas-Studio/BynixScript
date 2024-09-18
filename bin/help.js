const request = process.argv[2]
if (request === "-v") {
	console.log("0.0.3-next");
} else {
  console.log("<=====[ BynixScript ]=====>");
  console.log(" ");
  console.log("1. bsr : To run a file with the extension .bs");
  console.log("------");
  console.log("2. bst : To create a compiled file from a file with the extension .bs");
  console.log("------");
  console.log("3. bsp : To print the translation results from a file with the extension .bs, without running the file.");
  console.log("------");
  console.log("4. bsd : To delete file");
  console.log(" ");
  console.log("<=========================>");
  console.log("Repository: https://github.com/UngGasStudio/BynixScript");
}
