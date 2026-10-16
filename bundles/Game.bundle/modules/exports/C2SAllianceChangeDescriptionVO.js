Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SAllianceChangeDescriptionVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.T = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).TXT = __dep_exact_9e901e8e2483a22f_1.TextValide.getValideSmartFoxJSONTextMessage(__s3param0);
    __s3local0.T = __s3param1;
    __s3local0.validaTextSize();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SAllianceChangeDescriptionVO, __s1param0);
  C2SAllianceChangeDescriptionVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_ALLIANCE_CHANGE_DESCRIPTION;
  };
  C2SAllianceChangeDescriptionVO.prototype.validaTextSize = function () {
    if (this.TXT.length > __dep_exact_26a421b704832cff.AllianceConst.DESCRIPTION_MAX_LENGTH) {
      this.TXT = this.TXT.substr(0, __dep_exact_26a421b704832cff.AllianceConst.DESCRIPTION_MAX_LENGTH);
    }
  };
  return C2SAllianceChangeDescriptionVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SAllianceChangeDescriptionVO = __s0local0;
