function checkReplace(codeMsg) {
  codeMsg = codeMsg.replace(/(?<![\s])([a-zA-Z0-9_$]+)\.type/g, (match, p1) => `typeof ${p1}`);
  codeMsg = codeMsg.replace(/([a-zA-Z0-9_$]+)\.is_type\s===\s([a-zA-Z0-9"'`]+)/g, (match, p1, p2) => `typeof ${p1} === ${p2}`);
  codeMsg = codeMsg.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])type(["'])/g, (match, p1) => `${p1} instanceof TypeError`);
  codeMsg = codeMsg.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])reference(["'])/g, (match, p1) => `${p1} instanceof ReferenceError`);
  codeMsg = codeMsg.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])syntax(["'])/g, (match, p1) => `${p1} instanceof SyntaxError`);
  codeMsg = codeMsg.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])range(["'])/g, (match, p1) => `${p1} instanceof RangeError`);
  codeMsg = codeMsg.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])uri(["'])/g, (match, p1) => `${p1} instanceof URIError`);
  codeMsg = codeMsg.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])eval(["'])/g, (match, p1) => `${p1} instanceof EvalError`);
  codeMsg = codeMsg.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])(.+?)(["'])/g, (match, p1, p2, p3) => `${p1} instanceof ${p3}`);
  return codeMsg
}

module.exports = { checkReplace }