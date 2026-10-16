Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __s0local0 = function (__s1param0) {
  function BackGroundAppearanceItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BackGroundAppearanceItem, __s1param0);
  BackGroundAppearanceItem.prototype.setItem = function () {
    var __s5local0 = false;
    if (this._tmapNodeVO && __dep_export_TMapHelper.TMapHelper.isUnderworldMap(this._tmapNodeVO.mapID)) {
      __s5local0 = this._tmapNodeVO.isUnlocked;
    } else if (this._tmapNodeVO) {
      __s5local0 = this._tmapNodeVO.isDefeated;
    }
    this._disp.gotoAndStop(__s5local0 ? 2 : 1);
  };
  return BackGroundAppearanceItem;
}(require("gge-module:export_SeasonAppearanceItem").SeasonAppearanceItem);
exports.BackGroundAppearanceItem = __s0local0;
