// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 526
// Export: executionSetterTime; preserved source: modules/webpack/internal/exact_4d3bc170164ecdd3.js
// Original canonical SHA-256: d4a71d4eb6cb01569129c89ecfcc44ea1709d93a1becd53e43b82079eac093b6
exports.executionSetterTime = function executionSetterTime(__s17param0, __s17param1, __s17param2 = Object.getOwnPropertyDescriptor(__s17param0, __s17param1)) {
  var __s17local0 = __s17param2.set;
  if (__s17local0) {
    __s17param2.set = function (__s20param0) {
      console.log("Performance - Setter: %c" + __s17param1 + "%c scope:", "color: blue;", "color: black;");
      var __s20local0 = performance.now();
      if (__s17local0 !== undefined) {
        __s17local0.apply(this, [__s20param0]);
      }
      var __s20local1 = performance.now() - __s20local0;
      var __s20local2 = __s20local1 > __s0local0 ? "red" : "green";
      var __s20local3 = addExecutedMethod(__s17param0, __s17param1, __s20local1);
      console.log("Performance - Setter: %c" + __s17param1 + "%c took - %c" + __s20local1 + " %cms [Average time: %c" + __s20local3 + " %cms]", "color: blue;", "color: black;", "color: " + __s20local2 + ";", "color: black;", "color: " + __s20local2 + ";", "color: black;");
    };
  }
  return __s17param2;
};
