function excepReplace(codeMsg) {
  codeMsg = codeMsg.replace(/handle\:/g, 'try {')
  codeMsg = codeMsg.replace(/recovery\s\((.+?)\)\:/g, (match, p1) => `} catch (${p1}) {`)
  codeMsg = codeMsg.replace(/final\:/g, "} finally {")
  codeMsg = codeMsg.replace(/handle\:/g, 'try {')
  codeMsg = codeMsg.replace(/recovery\s*\((.+?)\)\:/g, (match, p1) => `} catch (${p1}) {`)
  codeMsg = codeMsg.replace(/final\:/g, "} finally {")
  codeMsg = codeMsg.replace(/Err\((.+?)\)/g, (match, p1) => `Error(${p1})`)
  codeMsg = codeMsg.replace(/URIErr\((.+?)\)/g, (match, p1) => `URIError(${p1})`)
  codeMsg = codeMsg.replace(/EvalErr\((.+?)\)/g, (match, p1) => `EvalError(${p1})`)
  codeMsg = codeMsg.replace(/TypeErr\((.+?)\)/g, (match, p1) => `TypeError(${p1})`)
  codeMsg = codeMsg.replace(/RangeErr\((.+?)\)/g, (match, p1) => `RangeError(${p1})`)
  codeMsg = codeMsg.replace(/SyntaxErr\((.+?)\)/g, (match, p1) => `Error(${p1})`)
  codeMsg = codeMsg.replace(/InternalErr\((.+?)\)/g, (match, p1) => `InternalError(${p1})`)
  codeMsg = codeMsg.replace(/ReferenceErr\((.+?)\)/g, (match, p1) => `ReferenceError(${p1})`)
  return codeMsg
}

module.exports = { excepReplace }