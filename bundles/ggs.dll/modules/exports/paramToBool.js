// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 118
// Export: paramToBool; preserved source: modules/webpack/exports/paramToBool.js
// Original canonical SHA-256: 6fa07998adb737cb3f8ed7e48a55d36129b564d4c42b6c558ded02c451db95ed
exports.paramToBool = function (__s3param0 = null, __s3param1 = false) {
  if (__s3param0) {
    if (isNaN(Number(__s3param0))) {
      return __s3param0.toLowerCase() === "true";
    } else {
      return __s3param0 !== "0";
    }
  } else {
    return __s3param1;
  }
};
