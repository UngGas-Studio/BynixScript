function expReplace(codeMsg) {
  codeMsg = codeMsg.replace(/(.+?)\.change\((.+?), \((.+?)\)\)\:/g, (match, p1, p2, p3) => `${p1}.replace(${p2}, (${p3}) => {`)
  codeMsg = codeMsg.replace(/(.+?)\.change\((.+)\)/g, (match, p1, p2) => `${p1}.replace(${p2})`);
}

module.exports = { expReplace }