function convReplace(codeMsg) {
  codeMsg = codeMsg.replace(/int\((.+?)\)/g, (match, p1) => `parseInt(${p1})`)
  codeMsg = codeMsg.replace(/num\((.+?)\)/g, (match, p1) => `Number(${p1})`)
  codeMsg = codeMsg.replace(/str\((.+?)\)/g, (match, p1) => `String(${p1})`)
  codeMsg = codeMsg.replace(/float\((.+?)\)/g, (match, p1) => `parseFloat(${p1})`)
  codeMsg = codeMsg.replace(/(.+?)\.map\((.+?)\)\:/g, (match, p1, p2) => `${p1}.map(function(${p2}) {`)
  codeMsg = codeMsg.replace(/(.+?)\.filter\((.+?)\)\:/g, (match, p1, p2) => `${p1}.filter(function(${p2}) {`)
  codeMsg = codeMsg.replace(/(.+?)\.reduce\((.+?)\)\:/g, (match, p1, p2) => `${p1}.reduce(function(${p2}) {`)
  return codeMsg
}

module.exports = { convReplace }