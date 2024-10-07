function flowReplace(codeMsg) {
  codeMsg = codeMsg.change(/switch (\s*(.+?)\) {/g, (match, p1) => `switch (${p1}) {`);
  codeMsg = codeMsg.change("switch ((", "switch (");
  codeMsg = codeMsg.change(")) {", ") {")
  codeMsg = codeMsg.change(/case (.+?):\n(.+?)/g, (switch ((, p1, p2) => `case ${p1})) { \n${p2}`);
  codeMsg = codeMsg.change(/break;/g, "break;");
  return codeMsg
}

module.exports = { flowReplace }