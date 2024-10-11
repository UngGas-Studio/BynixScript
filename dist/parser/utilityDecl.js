function utilityReplace(codeMsg) {
  codeMsg = codeMsg.replace(/is_includes([\s\S]*?)/g, (match, p1) => `includes${p1}`);
  codeMsg = codeMsg.replace(/is_start\(([a-zA-Z0-9"'`!?*#@$_&-+|.,:;=×÷%/]+)\)/g, (match, p1) => `startsWith(${p1})`);
  codeMsg = codeMsg.replace(/is_end\(([a-zA-Z0-9"'`!?*#@$_&-+|.,:;=×÷%/]+)\)/g, (match, p1) => `endsWith(${p1})`);
  codeMsg = codeMsg.replace(/is_matched\((.+?)\)/g, (match, p1) => `match(${p1})`);
  codeMsg = codeMsg.replace(/is_value\(([a-zA-Z0-9"'`]+)\)/g, (match, p1) => `value === ${p1}`);
  codeMsg = codeMsg.replace(/is_design\(([a-zA-Z0-9"'`]+)\)/g, (match, p1) => `style === ${p1}`);
  codeMsg = codeMsg.replace(/(.+?)\.design\s=\s(.+?)/g, (match, p1, p2) => `${p1}.style = ${p2}`);
  codeMsg = codeMsg.replace(/is_action\s([=!><]+)\s(["'])checked(["'])/g, (match) => `checked`);
  codeMsg = codeMsg.replace(/is_action\s([=!><]+)\s(["'])selected(["'])/g, (match) => `selected`);
  codeMsg = codeMsg.replace(/is_action\s([=!><]+)\s(["'])open(["'])/g, (match) => `open`);
  codeMsg = codeMsg.replace(/is_have\s([=!><]+)\s(["'])required(["'])/g, (match) => `required`);
  codeMsg = codeMsg.replace(/is_have\s([=!><]+)\s(["'])readOnly(["'])/g, (match) => `readOnly`);
  codeMsg = codeMsg.replace(/is_have\s([=!><]+)\s(["'])autofocus(["'])/g, (match) => `autofocus`);
  codeMsg = codeMsg.replace(/is_have\s([=!><]+)\s(["'])disabled(["'])/g, (match) => `disabled`);
  codeMsg = codeMsg.replace(/is_have\s([=!><]+)\s(["'])multiple(["'])/g, (match) => `multiple`);
  codeMsg = codeMsg.replace(/is_have\s([=!><]+)\s(["'])hidden(["'])/g, (match) => `hidden`);
  return codeMsg
}

module.exports = { utilityReplace }