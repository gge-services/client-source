// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 118
// Export: paramToNum; preserved source: modules/webpack/exports/paramToBool.js
// Original canonical SHA-256: 6fa07998adb737cb3f8ed7e48a55d36129b564d4c42b6c558ded02c451db95ed
exports.paramToNum = function (__s9param0 = null, __s9param1 = 0) {
  if (!__s9param0) {
    return __s9param1;
  }
  var __s9local0 = Number(__s9param0);
  if (isNaN(__s9local0)) {
    return __s9param1;
  } else {
    return __s9local0;
  }
};
