function forEachReplace(codeMsg) {
  codeMsg = codeMsg.replace(/forEach\((.+?)\)\:/g, (match, p1) => `forEach(${p1} => {`);
  codeMsg = codeMsg.replace(/forEach\((.+?)\s=>\s(.+?)\)/g, (match, p1, p2) => `forEach(${p1} => ${p2})`);
  return codeMsg
}

module.exports = { forEachReplace }