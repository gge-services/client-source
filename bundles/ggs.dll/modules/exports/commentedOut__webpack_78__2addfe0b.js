// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 78
// Export: commentedOut; preserved source: modules/webpack/classes/ExportToWindowDebuggerClass.js
// Original canonical SHA-256: 5865de9b067bdac188c159d621cf82a162a9eca0794c12ed4ee0a2236288f000
exports.commentedOut = function commentedOut(__s1param0 = "", __s1param1 = "") {
  return function (__s3param0, __s3param1, __s3param2) {
    __s3param2.value = function () {
      return __s0local0.warn(__s3param1 + " was commented out. " + function addIssue(__s7param0 = "") {
        if (__s7param0 !== "") {
          return " IssueID: " + __s7param0 + " ";
        } else {
          return "";
        }
      }(__s1param0) + function addMessage(__s11param0 = "") {
        if (__s11param0 !== "") {
          return " message: " + __s11param0 + " ";
        } else {
          return "";
        }
      }(__s1param1));
    };
    return __s3param2;
  };
};
