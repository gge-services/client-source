Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = 3;
var __s0local1 = new Map();
function addExecutedMethod(__s1param0, __s1param1, __s1param2) {
  if (__s0local1.has(__s1param0)) {
    var __s1local0 = __s0local1.get(__s1param0);
    var __s1local1 = __s1param2;
    if (__s1local0.has(__s1param1)) {
      __s1local1 = (__s1local0.get(__s1param1) + __s1param2) / 2;
    }
    __s1local0.set(__s1param1, __s1local1);
  } else {
    __s0local1.set(__s1param0, new Map().set(__s1param1, __s1param2));
  }
  return __s0local1.get(__s1param0).get(__s1param1);
}
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
