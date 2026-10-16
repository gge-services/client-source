Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function (__s1param0) {
  function CastleEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this).addToDic();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEnum, __s1param0);
  CastleEnum.getEnumListByClass = function (__s5param0) {
    var __s5local0 = __dep_export_ClientConstUtils.ClientConstUtils.getNameFromClass(__s5param0);
    var __s5local1 = CastleEnum._enumDic.get(__s5local0);
    if (!__s5local1) {
      console.warn("Enum with name '" + __s5local0 + "' is unknown. Does the enumClass extend from CastleEnum?");
    }
    return __s5local1;
  };
  CastleEnum.prototype.addToDic = function () {
    var __s8local0 = this.getClassName();
    if (!CastleEnum._enumDic.get(__s8local0)) {
      CastleEnum._enumDic.set(__s8local0, []);
    }
    CastleEnum._enumDic.get(__s8local0).push(this);
  };
  CastleEnum.__initialize_static_members = function () {
    CastleEnum._enumDic = new Map();
  };
  return CastleEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.CastleEnum = __s0local0;
__s0local0.__initialize_static_members();
