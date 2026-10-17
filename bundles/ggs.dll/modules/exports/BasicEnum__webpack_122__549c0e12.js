// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 122
// Export: BasicEnum; preserved source: modules/webpack/exports/instantiationKey.js
// Original canonical SHA-256: 025ae7c6cafe7d9114373af0a54a03b140d5579d912066a6fa93c89f5e9f8c8f
var __s0local1 = function () {
  function BasicEnum(__s3param0, __s3param1) {
    if (__s3param1 !== BasicEnum.instantiationKey) {
      this.throwInstantiationError();
    }
    this._name = __s3param0;
    var __s3local0 = Object(this).constructor;
    if (BasicEnum._basicValues.get(__s3local0) == null) {
      BasicEnum._basicValues.set(__s3local0, []);
    }
    BasicEnum._basicValues.get(__s3local0).push(this);
  }
  Object.defineProperty(BasicEnum.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  BasicEnum.getByProperty = function (__s9param0, __s9param1, __s9param2, __s9param3) {
    var __s9local0 = __s9param3;
    var __s9local1 = BasicEnum._basicValues.get(__s9param0);
    if (__s9local1 != null) {
      for (var __s9local2 = 0, __s9local3 = __s9local1; __s9local2 < __s9local3.length; __s9local2++) {
        var __s9local4 = __s9local3[__s9local2];
        if (__s9local4[__s9param1] === __s9param2) {
          __s9local0 = __s9local4;
          break;
        }
      }
    }
    return __s9local0;
  };
  BasicEnum.prototype.toString = function () {
    return this.getClassName() + "." + this._name;
  };
  BasicEnum.prototype.getClassName = function () {
    return __dep_export_CSSMouseCursor.getQualifiedClassName(this);
  };
  BasicEnum.prototype.throwInstantiationError = function () {
    __dep_exact_048b0d27b75c40dd.error("Only instantiate " + this.getClassName() + " within itself!");
  };
  BasicEnum._basicValues = new Map();
  BasicEnum.instantiationKey = __s0local0;
  return BasicEnum;
}();
exports.BasicEnum = __s0local1;
