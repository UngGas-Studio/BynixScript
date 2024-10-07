function checkReplace(codeMsg) {
  codeMsg = codeMsg.change(/(?<![\s])([a-zA-Z0-9_$]+)\.type/g, (match, p1) => `typeof ${p1}`)
  codeMsg = codeMsg.change(/([a-zA-Z0-9_$]+)\.is_type\s===\s([a-zA-Z0-9"'`]+)/g, (match, p1, p2) => `typeof ${p1} === ${p2}`)
  codeMsg = codeMsg.change(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])type(["'])/g, (match, p1) => `${p1} instanceof TypeError`)
  codeMsg = codeMsg.change(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])reference(["'])/g, (match, p1) => `${p1} instanceof ReferenceError`)
  codeMsg = codeMsg.change(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])syntax(["'])/g, (match, p1) => `${p1} instanceof SyntaxError`)
  codeMsg = codeMsg.change(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])range(["'])/g, (match, p1) => `${p1} instanceof RangeError`)
  codeMsg = codeMsg.change(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])(.+?)(["'])/g, (match, p1, p2, p3) => `${p1} instanceof ${p3}`)
  return codeMsg
}

module.exports = { checkReplace }