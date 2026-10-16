Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SeasonAppearanceItem(__s3param0, __s3param1) {
    this._tmapNodeVO = __s3param1;
    this._disp = __s3param0;
    this.setItem();
  }
  SeasonAppearanceItem.prototype.updateVO = function (__s5param0) {
    if (__s5param0) {
      this._tmapNodeVO = __s5param0;
    }
    this.setItem();
  };
  SeasonAppearanceItem.prototype.getNodeVO = function () {
    return this._tmapNodeVO;
  };
  SeasonAppearanceItem.prototype.setItem = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  SeasonAppearanceItem.prototype.dispose = function () {};
  return SeasonAppearanceItem;
}();
exports.SeasonAppearanceItem = __s0local0;
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
