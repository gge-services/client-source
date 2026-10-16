Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function DecoColumnAppearanceItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecoColumnAppearanceItem, __s1param0);
  DecoColumnAppearanceItem.prototype.setItem = function () {
    if (this._tmapNodeVO.isDefeated) {
      this._disp.visible = true;
    }
  };
  return DecoColumnAppearanceItem;
}(require("gge-module:export_SeasonAppearanceItem").SeasonAppearanceItem);
exports.DecoColumnAppearanceItem = __s0local0;
