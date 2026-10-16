Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TypeUtil() {}
  TypeUtil.isArrayLike = function (__s5param0) {
    if (!__s5param0) {
      return false;
    }
    if (__s5param0 instanceof Array) {
      return true;
    }
    for (var __s5local0 = 0, __s5local1 = TypeUtil.IS_ARRAY_MEMEBRS.length; __s5local0 < __s5local1; __s5local0++) {
      if (!(TypeUtil.IS_ARRAY_MEMEBRS[__s5local0] in __s5param0)) {
        return false;
      }
    }
    return true;
  };
  TypeUtil.isSimpleObject = function (__s12param0) {
    return __s12param0 instanceof Object && Object(__s12param0).constructor === Object;
  };
  TypeUtil.isSameType = function (__s14param0, __s14param1) {
    return Object(__s14param0).constructor == Object(__s14param1).constructor;
  };
  TypeUtil.isPrimitiveType = function (__s16param0) {
    return __s16param0 == Number || __s16param0 == Number || __s16param0 == Number || __s16param0 == String || __s16param0 == Boolean;
  };
  TypeUtil.isPrimitive = function (__s18param0) {
    return __s18param0 == undefined || __s18param0 == null || __s18param0 instanceof Number || __s18param0 instanceof Number || __s18param0 instanceof Number || __s18param0 instanceof String || __s18param0 instanceof Boolean;
  };
  TypeUtil.isImmutableType = function (__s20param0) {
    return __s20param0 == Number || __s20param0 == Number || __s20param0 == Number || __s20param0 == String || __s20param0 == Boolean || __s20param0 == Function || __s20param0 == Object;
  };
  TypeUtil.isImmutable = function (__s22param0) {
    return __s22param0 == undefined || __s22param0 == null || __s22param0 instanceof Number || __s22param0 instanceof Number || __s22param0 instanceof Number || __s22param0 instanceof String || __s22param0 instanceof Boolean || __s22param0 instanceof Function || __s22param0 instanceof Object;
  };
  TypeUtil.getSimilarTo = function (__s24param0) {
    if (__s24param0 && __s24param0 instanceof Object) {
      try {
        return new (Object(__s24param0).constructor)();
      } catch (__s28local0) {}
    }
    return __s24param0;
  };
  TypeUtil.clone = function (__s30param0) {
    if (TypeUtil.isImmutable(__s30param0)) {
      return __s30param0;
    }
    if ("clone" in __s30param0 && __s30param0.clone instanceof Function) {
      try {
        return __s30param0.clone();
      } catch (__s35local0) {}
    }
    if (TypeUtil.isArrayLike(__s30param0)) {
      return __s30param0.slice();
    }
    if (__s30param0 instanceof Date) {
      var __s30local0 = new Date();
      __s30local0.setTime(__s30param0.getTime());
      return __s30local0;
    }
    if (__s30param0 instanceof Object) {
      var __s30local1 = TypeUtil.getSimilarTo(__s30param0);
      for (var __s30local2 in __s30param0) {
        __s30local1[__s30local2] = TypeUtil.clone(__s30param0[__s30local2]);
      }
      return __s30local1;
    }
    throw new Error("Clonning of " + String(__s30param0) + "is not supported.");
  };
  TypeUtil.IS_ARRAY_VECTOR = /__AS3__.vec::Vector.<[\w\.:]+>/;
  TypeUtil.IS_ARRAY_MEMEBRS = ["length", "concat", "push", "pop", "shift", "unshift", "indexOf", "lastIndexOf", "reverse", "slice", "splice"];
  return TypeUtil;
}();
exports.TypeUtil = __s0local0;
