const { https, getDownloads } = require('../js/download.js')

const method = process.argv[2]

if (method === "-v") {
  console.log("v0.1.2-next")
} else if (method === "--version") {
  console.log("v0.1.2-next")
} else if (method === "-h") {
  const select = process.argv[3]
  console.log("<=====[ BynixScript ]=====>")
  console.log(" ")
  console.log("Execution")
  console.log("1. bsr : To run a file with the extension .bs")
  console.log("------")
  console.log("2. bst [path] : To create a compiled file from a file with the extension .bs")
  console.log("------")
  console.log("3. bsp [path] : To print the translation results from a file with the extension .bs, without running the file.")
  console.log("------")
  console.log("4. bsd [path] : To delete file")
  console.log(" ")
  console.log("Information")
  console.log("bynixscript [-h, --help]")
  console.log("bynixscript [-v, --version]")
  console.log("bynixscript [-d, --download] [-d, --day, -w, --week, -m, --month]")
  console.log(" ")
  console.log("<=========================>")
} else if (method === "--help") {
  const select = process.argv[3]
  console.log("<=====[ BynixScript ]=====>")
  console.log(" ")
  console.log("Execution")
  console.log("1. bsr : To run a file with the extension .bs")
  console.log("------")
  console.log("2. bst [path] : To create a compiled file from a file with the extension .bs")
  console.log("------")
  console.log("3. bsp [path] : To print the translation results from a file with the extension .bs, without running the file.")
  console.log("------")
  console.log("4. bsd [path] : To delete file")
  console.log(" ")
  console.log("Information")
  console.log("bynixscript [-h, --help]")
  console.log("bynixscript [-v, --version]")
  console.log("bynixscript [-d, --download] [-d, --day, -w, --week, -m, --month]")
  console.log(" ")
  console.log("<=========================>")
} else if (method === "-d") {
  const select = process.argv[3]
  if (select === "-d") {
    getDownloads('bynixscript', 'day')
  } else if (select === "--day") {
    getDownloads('bynixscript', 'day')
  } else if (select === "-w") {
    getDownloads('bynixscript', 'week')
  } else if (select === "--week") {
    getDownloads('bynixscript', 'week')
  } else if (select === "-m") {
    getDownloads('bynixscript', 'month')
  } else if (select === "--month") {
    getDownloads('bynixscript', 'month')
  } else {
    getDownloads('bynixscript', 'day')
  }
} else if (method === "--download") {
  const select = process.argv[3]
  if (select === "-d") {
    getDownloads('bynixscript', 'day')
  } else if (select === "--day") {
    getDownloads('bynixscript', 'day')
  } else if (select === "-w") {
    getDownloads('bynixscript', 'week')
  } else if (select === "--week") {
    getDownloads('bynixscript', 'week')
  } else if (select === "-m") {
    getDownloads('bynixscript', 'month')
  } else if (select === "--month") {
    getDownloads('bynixscript', 'month')
  } else {
    getDownloads('bynixscript', 'day')
  }
} else {
  console.log("Sorry, wrong method. You can type 'bynixscript -v' to check the version or 'bynixscript -h' for help.")
}