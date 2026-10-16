var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
function config(__s1param0) {
  try {
    if (!__dep_exact_d8857732a937369e.localStorage) {
      return false;
    }
  } catch (__s5local0) {
    return false;
  }
  var __s1local0 = __dep_exact_d8857732a937369e.localStorage[__s1param0];
  return __s1local0 != null && String(__s1local0).toLowerCase() === "true";
}
module.exports = function deprecate(__s7param0, __s7param1) {
  if (config("noDeprecation")) {
    return __s7param0;
  }
  var __s7local0 = false;
  return function deprecated() {
    if (!__s7local0) {
      if (config("throwDeprecation")) {
        throw new Error(__s7param1);
      }
      if (config("traceDeprecation")) {
        console.trace(__s7param1);
      } else {
        console.warn(__s7param1);
      }
      __s7local0 = true;
    }
    return __s7param0.apply(this, arguments);
  };
};
