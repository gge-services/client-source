Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_5a69994851456f13 = require("gge-module:exact_5a69994851456f13");
var __dep_class_XMLNode = require("gge-module:class_XMLNode");
var __s0local0 = {
  get: function (__s1param0, __s1param1) {
    var __s1local0 = typeof __s1param0[__s1param1];
    if (__s1param1 === "_data" || __s1local0 === "function" || __s1local0 === "object" || __s1local0 === "number") {
      return __s1param0[__s1param1];
    }
    if (typeof __s1param1 == "string") {
      if (__s1param1.indexOf("@") === 0) {
        return __s1param0.attribute(__s1param1.substr(1));
      }
      if (__s1param0._data[__s1param1] !== undefined) {
        var __s1local1 = __s1param0.child(__s1param1);
        if (function isPrimitiveType(__s7param0) {
          return __s7param0 === null || typeof __s7param0 == "string" || typeof __s7param0 == "number" || typeof __s7param0 == "boolean";
        }(__s1local1._data)) {
          var __s1local2 = __s1local1._data;
          if (__s1local2 !== null) {
            return __s1local2;
          } else {
            return "";
          }
        }
        return __s1local1;
      }
      if (__s1param0._data["@" + __s1param1] !== undefined) {
        return __s1param0.attribute(__s1param1);
      } else {
        return undefined;
      }
    }
    return __s1param0[__s1param1];
  }
};
function createNodeProxy(__s14param0, __s14param1 = null) {
  return new Proxy(new __dep_class_XMLNode.XMLNode(__s14param0, __s14param1), __s0local0);
}
exports.createNodeProxy = createNodeProxy;
exports.XML = function XML(__s16param0) {
  var __s16local0 = __dep_exact_5a69994851456f13.fromXML(__s16param0);
  var __s16local1 = __s16local0;
  for (var __s16local2 in __s16local0) {
    if (__s16local2.match(/[A-Za-z\-]+/)) {
      __s16local1 = __s16local0[__s16local2];
      break;
    }
  }
  return createNodeProxy(__s16local1);
};
