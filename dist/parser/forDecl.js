function forReplace(codeMsg) {
  codeMsg = codeMsg.replace(/for\s(.+?)=(.+?)\sto\s(.+?)\:/g, (match, p1, p2, p3) => `for (let ${p1} = ${p2}; ${p1} < ${p3}; ${p1}++) {`);
  codeMsg = codeMsg.replace(/for\s(.+?)\sof\s(.+?)\:/g, (match, p1, p2) => `for (${p1} of ${p2}) {`)
  codeMsg = codeMsg.replace(/for\s(.+?)\sin\s(.+?)\:/g, (match, p1, p2) => `for (${p1} in ${p2}) {`)
  return codeMsg
}

module.exports = { forReplace }