Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ACustomInteractiveCastleStatusIcon(__s3param0, __s3param1 = __dep_exact_f855840627e6e145.int(__dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_LOW), __s3param2 = false) {
    var __s3local0 = this;
    __s3local0._isExternalLoadedIcon = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this)._isExternalLoadedIcon = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACustomInteractiveCastleStatusIcon, __s1param0);
  ACustomInteractiveCastleStatusIcon.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.icon.mouseChildren = true;
    this.icon.mouseEnabled = true;
    if (!this._isExternalLoadedIcon) {
      this.prepareLoadedIcon(this.icon);
    }
  };
  ACustomInteractiveCastleStatusIcon.prototype.prepareLoadedIcon = function (__s8param0) {
    this.removeClickListenerToLoadedIcon();
    this._loadedIcon = __s8param0;
    this._loadedIcon.addEventListener(__s0local0.CLICK, this.bindFunction(this.onIconClicked));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._loadedIcon);
  };
  ACustomInteractiveCastleStatusIcon.prototype.hideLoaded = function (__s10param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
    this.removeClickListenerToLoadedIcon();
  };
  ACustomInteractiveCastleStatusIcon.prototype.disposeLoaded = function () {
    __s1param0.prototype.disposeLoaded.call(this);
    this.removeClickListenerToLoadedIcon();
  };
  ACustomInteractiveCastleStatusIcon.prototype.removeClickListenerToLoadedIcon = function () {
    if (this._loadedIcon) {
      this._loadedIcon.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onIconClicked));
    }
  };
  ACustomInteractiveCastleStatusIcon.prototype.onIconClicked = function (__s17param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      this.onClick();
    }
  };
  ACustomInteractiveCastleStatusIcon.prototype.createBasicButton = function () {};
  return ACustomInteractiveCastleStatusIcon;
}(__dep_export_ACastleStatusIcon.ACastleStatusIcon);
exports.ACustomInteractiveCastleStatusIcon = __s0local1;
