Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function BaronScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BaronScrollItem, __s1param0);
  BaronScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    var __s5local0 = this.lordScrollItemVO.lordVO;
    if (__s5local0.lockedInCastleID >= 0 && __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s5local0.lockedInCastleID) != null) {
      this.setToolTipText(new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s5local0.lockedInCastleID).areaNameString));
    } else if (__s5local0.picID == 13) {
      this.setToolTipText(new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_baron_eiland_inactive"));
    } else {
      this.setToolTipText(new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("baron_toolTip_isFree"));
    }
  };
  return BaronScrollItem;
}(require("gge-module:export_LordScrollItem").LordScrollItem);
exports.BaronScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
