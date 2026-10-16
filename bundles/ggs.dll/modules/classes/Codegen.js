function codegen(__s1param0, __s1param1) {
  if (typeof __s1param0 == "string") {
    __s1param1 = __s1param0;
    __s1param0 = undefined;
  }
  var __s1local0 = [];
  function Codegen(__s4param0) {
    if (typeof __s4param0 != "string") {
      var __s4local0 = toString();
      if (codegen.verbose) {
        console.log("codegen: " + __s4local0);
      }
      __s4local0 = "return " + __s4local0;
      if (__s4param0) {
        for (var __s4local1 = Object.keys(__s4param0), __s4local2 = new Array(__s4local1.length + 1), __s4local3 = new Array(__s4local1.length), __s4local4 = 0; __s4local4 < __s4local1.length;) {
          __s4local2[__s4local4] = __s4local1[__s4local4];
          __s4local3[__s4local4] = __s4param0[__s4local1[__s4local4++]];
        }
        __s4local2[__s4local4] = __s4local0;
        return Function.apply(null, __s4local2).apply(null, __s4local3);
      }
      return Function(__s4local0)();
    }
    for (var __s4local5 = new Array(arguments.length - 1), __s4local6 = 0; __s4local6 < __s4local5.length;) {
      __s4local5[__s4local6] = arguments[++__s4local6];
    }
    __s4local6 = 0;
    __s4param0 = __s4param0.replace(/%([%dfijs])/g, function replace(__s13param0, __s13param1) {
      var __s13local0 = __s4local5[__s4local6++];
      switch (__s13param1) {
        case "d":
        case "f":
          return String(Number(__s13local0));
        case "i":
          return String(Math.floor(__s13local0));
        case "j":
          return JSON.stringify(__s13local0);
        case "s":
          return String(__s13local0);
      }
      return "%";
    });
    if (__s4local6 !== __s4local5.length) {
      throw Error("parameter count mismatch");
    }
    __s1local0.push(__s4param0);
    return Codegen;
  }
  function toString(__s17param0) {
    return "function " + (__s17param0 || __s1param1 || "") + "(" + (__s1param0 && __s1param0.join(",") || "") + "){\n  " + __s1local0.join("\n  ") + "\n}";
  }
  Codegen.toString = toString;
  return Codegen;
}
module.exports = codegen;
codegen.verbose = false;
