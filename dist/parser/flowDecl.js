function flowReplace(codeMsg) {
  codeMsg = codeMsg.replace(/(?<![(])match\s*(.+?)\:/g, (match, p1) => `switch ((${p1})) {`)
  codeMsg = codeMsg.replace("switch ((", "switch (")
  codeMsg = codeMsg.replace(")) {", ") {")
  codeMsg = codeMsg.replace(/case (.+?):\n(.+?)/g, (match, p1, p2) => `case ${p1}: \n${p2}`)
  return codeMsg
}

module.exports = { flowReplace }