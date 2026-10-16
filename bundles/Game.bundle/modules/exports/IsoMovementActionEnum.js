Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoMovementActionEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoMovementActionEnum, __s1param0);
  IsoMovementActionEnum.__initialize_static_members = function () {
    IsoMovementActionEnum.STAND = new IsoMovementActionEnum("standing");
    IsoMovementActionEnum.WALK = new IsoMovementActionEnum("walking");
    IsoMovementActionEnum.WORK = new IsoMovementActionEnum("work");
  };
  return IsoMovementActionEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoMovementActionEnum = __s0local0;
__s0local0.__initialize_static_members();
