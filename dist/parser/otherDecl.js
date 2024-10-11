function otherReplace(code) {
  code = code.replace(/process\.argv\[(\d+)\]/g, (match, p1) => `process.argv[${a}]`);
  codeMsg = codeMsg.replace(/end\:(.+?)/g, (match, p1) => `}, ${p1});`);
  return codeMsg
}

module.exports = { otherReplace }