var __s0local0;
var __s0local1;
var __s0local2 = module.exports = require("gge-module:class_Buffer_allocUnsafe");
var __dep_exact_1cf3e1eeed2d717d = require("gge-module:exact_1cf3e1eeed2d717d");
__s0local2.codegen = require("gge-module:class_Codegen");
__s0local2.fetch = require("gge-module:exact_1116a4b82559617b");
__s0local2.path = require("gge-module:exact_e79b64ae3a978872");
__s0local2.fs = __s0local2.inquire("fs");
__s0local2.toArray = function toArray(__s1param0) {
  if (__s1param0) {
    for (var __s1local0 = Object.keys(__s1param0), __s1local1 = new Array(__s1local0.length), __s1local2 = 0; __s1local2 < __s1local0.length;) {
      __s1local1[__s1local2] = __s1param0[__s1local0[__s1local2++]];
    }
    return __s1local1;
  }
  return [];
};
__s0local2.toObject = function toObject(__s6param0) {
  var __s6local0 = {};
  for (var __s6local1 = 0; __s6local1 < __s6param0.length;) {
    var __s6local2 = __s6param0[__s6local1++];
    var __s6local3 = __s6param0[__s6local1++];
    if (__s6local3 !== undefined) {
      __s6local0[__s6local2] = __s6local3;
    }
  }
  return __s6local0;
};
var __s0local3 = /\\/g;
var __s0local4 = /"/g;
__s0local2.isReserved = function isReserved(__s11param0) {
  return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(__s11param0);
};
__s0local2.safeProp = function safeProp(__s13param0) {
  if (!/^[$\w_]+$/.test(__s13param0) || __s0local2.isReserved(__s13param0)) {
    return "[\"" + __s13param0.replace(__s0local3, "\\\\").replace(__s0local4, "\\\"") + "\"]";
  } else {
    return "." + __s13param0;
  }
};
__s0local2.ucFirst = function ucFirst(__s17param0) {
  return __s17param0.charAt(0).toUpperCase() + __s17param0.substring(1);
};
var __s0local5 = /_([a-z])/g;
__s0local2.camelCase = function camelCase(__s19param0) {
  return __s19param0.substring(0, 1) + __s19param0.substring(1).replace(__s0local5, function (__s21param0, __s21param1) {
    return __s21param1.toUpperCase();
  });
};
__s0local2.compareFieldsById = function compareFieldsById(__s23param0, __s23param1) {
  return __s23param0.id - __s23param1.id;
};
__s0local2.decorateType = function decorateType(__s25param0, __s25param1) {
  if (__s25param0.$type) {
    if (__s25param1 && __s25param0.$type.name !== __s25param1) {
      __s0local2.decorateRoot.remove(__s25param0.$type);
      __s25param0.$type.name = __s25param1;
      __s0local2.decorateRoot.add(__s25param0.$type);
    }
    return __s25param0.$type;
  }
  __s0local0 ||= require("gge-module:exact_60ddcf91058706cf");
  var __s25local0 = new __s0local0(__s25param1 || __s25param0.name);
  __s0local2.decorateRoot.add(__s25local0);
  __s25local0.ctor = __s25param0;
  Object.defineProperty(__s25param0, "$type", {
    value: __s25local0,
    enumerable: false
  });
  Object.defineProperty(__s25param0.prototype, "$type", {
    value: __s25local0,
    enumerable: false
  });
  return __s25local0;
};
var __s0local6 = 0;
__s0local2.decorateEnum = function decorateEnum(__s29param0) {
  if (__s29param0.$type) {
    return __s29param0.$type;
  }
  __s0local1 ||= require("gge-module:class_Enum");
  var __s29local0 = new __s0local1("Enum" + __s0local6++, __s29param0);
  __s0local2.decorateRoot.add(__s29local0);
  Object.defineProperty(__s29param0, "$type", {
    value: __s29local0,
    enumerable: false
  });
  return __s29local0;
};
Object.defineProperty(__s0local2, "decorateRoot", {
  get: function () {
    return __dep_exact_1cf3e1eeed2d717d.decorated ||= new (require("gge-module:class_Root"))();
  }
});
