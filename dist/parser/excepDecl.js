function excepReplace(codeMsg) {
  codeMsg = codeMsg.change(/handle\:/g, 'try {')
  codeMsg = codeMsg.change(/recovery\s*\((.+?)\)\:/g, (match, p1) => `} catch (${p1}) {`)
  return codeMsg
}

module.exports = { excepReplace }