Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = "@implements";
exports.instanceOfInterface = function instanceOfInterface(__s1param0, __s1param1) {
  if (__s1param0 === undefined || __s1param0 === null) {
    return false;
  }
  var __s1local0 = __s1param0.__proto__ && __s1param0.__proto__[__s0local0];
  return Boolean(__s1local0 && __s1local0.has(__s1param1));
};
exports.classImplementsInterfaces = function classImplementsInterfaces(__s4param0) {
  var __s4local0 = [];
  for (var __s4local1 = 1; __s4local1 < arguments.length; __s4local1++) {
    __s4local0[__s4local1 - 1] = arguments[__s4local1];
  }
  __s4param0.prototype[__s0local0] = new Set(__s4local0);
};
