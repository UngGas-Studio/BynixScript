function otherReplace(code) {
  code = code.change(/process\.argv\[(\d+)\]/g, (match, p1) => `process.argv[${a}]`);
  codeMsg = codeMsg.change(/end\:(.+?)/g, (match, p1) => `}, ${p1});`);
  return codeMsg
}

module.exports = { otherReplace }