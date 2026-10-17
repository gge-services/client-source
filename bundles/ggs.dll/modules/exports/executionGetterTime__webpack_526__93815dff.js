// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 526
// Export: executionGetterTime; preserved source: modules/webpack/internal/exact_4d3bc170164ecdd3.js
// Original canonical SHA-256: d4a71d4eb6cb01569129c89ecfcc44ea1709d93a1becd53e43b82079eac093b6
exports.executionGetterTime = function executionGetterTime(__s12param0, __s12param1, __s12param2 = Object.getOwnPropertyDescriptor(__s12param0, __s12param1)) {
  var __s12local0 = __s12param2.get;
  if (__s12local0) {
    __s12param2.get = function () {
      console.log("Performance - Getter: %c" + __s12param1 + "%c scope:", "color: blue;", "color: black;");
      var __s15local0 = performance.now();
      var __s15local1 = __s12local0 !== undefined ? __s12local0.apply(this) : undefined;
      var __s15local2 = performance.now() - __s15local0;
      var __s15local3 = __s15local2 > __s0local0 ? "red" : "green";
      var __s15local4 = addExecutedMethod(__s12param0, __s12param1, __s15local2);
      console.log("Performance - Getter: %c" + __s12param1 + "%c took - %c" + __s15local2 + " %cms [Average time: %c" + __s15local4 + " %cms]", "color: blue;", "color: black;", "color: " + __s15local3 + ";", "color: black;", "color: " + __s15local3 + ";", "color: black;");
      return __s15local1;
    };
  }
  return __s12param2;
};
