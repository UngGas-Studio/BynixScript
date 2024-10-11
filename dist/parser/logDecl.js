function logReplace(codeMsg) {
  codeMsg = codeMsg.replace(/print\((.+?)\)/g, (match, p1) => `console.log(${p1})`)
  codeMsg = codeMsg.replace(/print\.err\((.+?)\)/g, (match, p1) => `console.error(${p1})`)
  codeMsg = codeMsg.replace(/print\.info\((.+?)\)/g, (match, p1) => `console.info(${p1})`)
  codeMsg = codeMsg.replace(/print\.warn\((.+?)\)/g, (match, p1) => `console.warn(${p1})`)
  codeMsg = codeMsg.replace(/print\.debug\((.+?)\)/g, (match, p1) => `console.debug(${p1})`)
  codeMsg = codeMsg.replace(/print\.trace\((.+?)\)/g, (match, p1) => `console.trace(${p1})`)
  codeMsg = codeMsg.replace(/print\.assert\((.+?)\)/g, (match, p1) => `console.assert(${p1})`)
  return codeMsg
}

module.exports = { logReplace }