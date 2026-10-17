// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 761
// Export: BasicEnum; preserved source: modules/internal/exact_0d9a542ca0706547.js
// Original canonical SHA-256: cac477c3235252ded69ff328e8baab7d3ad9ecd07dbe15cd668aa1c5eb44ea53
var __s0local0 = function () {
  function BasicEnum(__s3param0, __s3param1) {
    if (__s3param1 != BasicEnum.instantiationKey) {
      this.throwInstantiationError();
    }
    this._name = __s3param0;
    var __s3local0 = this.constructor;
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
    var __s9local0 = BasicEnum._basicValues.get(__s9param0);
    return __dep_opaque_9f948d30698163c2a68a09cc(__s9local0, [__s9param1, __s9param2]) || __s9param3;
  };
  BasicEnum.prototype.toString = function () {
    return this.getClassName() + "." + this._name;
  };
  BasicEnum.prototype.getClassName = function () {
    return this.getQualifiedClassName(this).match("[^:]*$")[0];
  };
  BasicEnum.prototype.throwInstantiationError = function () {
    throw new Error("Only instantiate " + this.getClassName() + " within itself!");
  };
  BasicEnum.prototype.getQualifiedClassName = function (__s17param0) {
    return __s17param0.constructor.name + "";
  };
  BasicEnum._basicValues = new Map();
  BasicEnum.instantiationKey = Math.random();
  return BasicEnum;
}();
exports.BasicEnum = __s0local0;
