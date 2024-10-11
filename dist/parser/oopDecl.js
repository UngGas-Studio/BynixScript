function oopReplace(codeMsg) {
  codeMsg = codeMsg.replace(/constructor\((.+?)\)\:/g, (match, p1) => `constructor(${p1}) {`);
  codeMsg = codeMsg.replace(/(.+?)\(\)\:/g, (match, p1) => `${p1}() {`);
  codeMsg = codeMsg.replace(/class\s(.+?)\:/g, (match, p1) => `class ${p1} {`);
  codeMsg = codeMsg.replace(/class\s(.+?)\sextends\s(.+?)\:/g, (match, p1, p2) => `class ${p1} extends ${p2} {`);
  codeMsg = codeMsg.replace(/static\((.+?)\)\ {/g, (match, p1) => `static(${p1}) {`);
  codeMsg = codeMsg.replace(/super\((.+?)\)\:/g, (match, p1) => `super(${p1})`)
  codeMsg = codeMsg.replace(/throw (.+?)/g, (match, p1) => `throw ${p1}`)
  codeMsg = codeMsg.replace(/new (.+?)/g, (match, p1) => `new ${p1}`)
  return codeMsg
}

module.exports = { oopReplace }