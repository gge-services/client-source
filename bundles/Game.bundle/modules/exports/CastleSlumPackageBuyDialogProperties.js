Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSlumPackageBuyDialogProperties() {
    var __s3local0 = this;
    __s3local0.activeSlumLevel = 0;
    __s3local0.level = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSlumPackageBuyDialogProperties, __s1param0);
  CastleSlumPackageBuyDialogProperties.prototype.parseDataFromSlumPackageScrollItemVO = function (__s5param0) {
    this.parseDataFromScrollItem(__s5param0);
    this.slumVO = __s5param0.slumVO;
    this.activeSlumLevel = __s5param0.activeSlumLevel;
    this.level = __s5param0.level;
  };
  return CastleSlumPackageBuyDialogProperties;
}(require("gge-module:export_CastleGenericBuyDialogProperties").CastleGenericBuyDialogProperties);
exports.CastleSlumPackageBuyDialogProperties = __s0local0;
