Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoGridOriginEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoGridOriginEnum, __s1param0);
  IsoGridOriginEnum.__initialize_static_members = function () {
    IsoGridOriginEnum.NORMAL = new IsoGridOriginEnum("normal");
    IsoGridOriginEnum.TOP_CORNER = new IsoGridOriginEnum("topCorner");
    IsoGridOriginEnum.BOTTOM_CORNER = new IsoGridOriginEnum("bottomCorner");
    IsoGridOriginEnum.LEFT_CORNER = new IsoGridOriginEnum("leftCorner");
    IsoGridOriginEnum.RIGHT_CORNER = new IsoGridOriginEnum("rightCorner");
  };
  return IsoGridOriginEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoGridOriginEnum = __s0local0;
__s0local0.__initialize_static_members();
