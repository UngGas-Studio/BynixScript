function interactReplace(codeMsg) {
  codeMsg = codeMsg.replace(/touch\((.+?)\)/g, (match, p1) => `alert(${p1})`)
  codeMsg = codeMsg.replace(/ask\((.+?)\)/g, (match, p1) => `prompt(${p1})`)
  codeMsg = codeMsg.replace(/confirm\((.+?)\)/g, (match, p1) => `confirm(${p1})`)
  return codeMsg
}

module.exports = { interactReplace }