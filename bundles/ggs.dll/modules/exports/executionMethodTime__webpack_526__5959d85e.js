// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 526
// Export: executionMethodTime; preserved source: modules/webpack/internal/exact_4d3bc170164ecdd3.js
// Original canonical SHA-256: d4a71d4eb6cb01569129c89ecfcc44ea1709d93a1becd53e43b82079eac093b6
exports.executionMethodTime = function executionMethodTime(__s6param0, __s6param1, __s6param2 = Object.getOwnPropertyDescriptor(__s6param0, __s6param1)) {
  var __s6local0 = __s6param2.value;
  __s6param2.value = function () {
    var __s8local0 = [];
    for (var __s8local1 = 0; __s8local1 < arguments.length; __s8local1++) {
      __s8local0[__s8local1 - 0] = arguments[__s8local1];
    }
    console.log("Performance - Method: %c" + __s6param1 + "%c scope:", "color: blue;", "color: black;");
    var __s8local2 = performance.now();
    var __s8local3 = __s6local0.apply(this, __s8local0);
    var __s8local4 = performance.now() - __s8local2;
    var __s8local5 = __s8local4 > __s0local0 ? "red" : "green";
    var __s8local6 = addExecutedMethod(__s6param0, __s6param1, __s8local4);
    console.log("Performance - Method %c" + __s6param1 + "%c took - %c" + __s8local4 + " %cms [Average time: %c" + __s8local6 + " %cms]", "color: blue;", "color: black;", "color: " + __s8local5 + ";", "color: black;", "color: " + __s8local5 + ";", "color: black;");
    return __s8local3;
  };
  return __s6param2;
};
