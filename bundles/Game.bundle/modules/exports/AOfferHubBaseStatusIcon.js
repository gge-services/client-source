Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ACastleLabeledStatusIcon = require("gge-module:export_ACastleLabeledStatusIcon");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function AOfferHubBaseStatusIcon(__s3param0, __s3param1 = "txt_label", __s3param2 = null, __s3param3 = __dep_exact_f855840627e6e145.int(__dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_LOW), __s3param4 = null) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3, __s3param4) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AOfferHubBaseStatusIcon, __s1param0);
  AOfferHubBaseStatusIcon.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.icon.basicButton.mouseOverScale = 1;
    this.icon.mc_hover.visible = false;
    this.icon.mc_down.visible = false;
    if (this.icon.barItem) {
      this.icon.barItem.visible = false;
    }
  };
  AOfferHubBaseStatusIcon.prototype.setTooltipLoaded = function (__s8param0 = null) {
    if (this._tooltipParams) {
      this.hitDisp().toolTipText = {
        t: this._tooltipId,
        p: this._tooltipParams
      };
    } else {
      this.hitDisp().toolTipText = this._tooltipId;
    }
  };
  AOfferHubBaseStatusIcon.prototype.onInnerIconClipLoaded = function (__s12param0 = null) {
    this.customizeInnerIconClip(__s12param0);
    this.addAndResizeInnerIcon();
  };
  AOfferHubBaseStatusIcon.prototype.addAndResizeInnerIcon = function () {
    if (this._innerIconClip.isLoaded) {
      this.icon.mc_icon.addChild(this._innerIconClip.currentshownDisplayObject);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleDownToFit(this._innerIconClip.currentshownDisplayObject, AOfferHubBaseStatusIcon.INNER_ICON_SIZE, AOfferHubBaseStatusIcon.INNER_ICON_SIZE);
    }
  };
  AOfferHubBaseStatusIcon.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.hitDisp().addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onMouseOver));
    this.hitDisp().addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onMouseOut));
    this.hitDisp().addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.hitDisp().addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  AOfferHubBaseStatusIcon.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.hitDisp().removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onMouseOver));
    this.hitDisp().removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onMouseOut));
    this.hitDisp().removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.hitDisp().removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  AOfferHubBaseStatusIcon.prototype.onMouseOver = function (__s21param0) {
    this.icon.mc_hover.visible = true;
  };
  AOfferHubBaseStatusIcon.prototype.onMouseOut = function (__s23param0) {
    this.icon.mc_hover.visible = false;
    this.icon.mc_down.visible = false;
  };
  AOfferHubBaseStatusIcon.prototype.onMouseDown = function (__s25param0) {
    this.icon.mc_hover.visible = false;
    this.icon.mc_down.visible = true;
    this.updateCache();
  };
  AOfferHubBaseStatusIcon.prototype.onMouseUp = function (__s27param0) {
    if (this.icon.mc_down.visible) {
      this.onClick();
    }
    this.icon.mc_hover.visible = false;
    this.icon.mc_down.visible = false;
    this.updateCache();
  };
  AOfferHubBaseStatusIcon.prototype.disposeLoaded = function () {
    __s1param0.prototype.disposeLoaded.call(this);
    if (this._innerIconClip) {
      this._innerIconClip.dispose();
    }
  };
  AOfferHubBaseStatusIcon.prototype.hitDisp = function () {
    return this.icon;
  };
  AOfferHubBaseStatusIcon.prototype.customizeInnerIconClip = function (__s35param0) {};
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_PRIME_TIME = 2;
  AOfferHubBaseStatusIcon.PRIORITY_GLOBAL_PRIME_TIME = 3;
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_PRIME_DAY = 5;
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_MULTIREWARD_CHEST = 6;
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_CHEST = 7;
  AOfferHubBaseStatusIcon.PRIORITY_MAIL_GIFT = 8;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_PACKAGES = 21;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BOOSTER = 22;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BUILDINGS = 23;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_RELICUS = 24;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_TECHNICUS = 25;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_KL_SEASON_PASS = 26;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_REVIVE_ALL = 27;
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_BESTSELLER_SHOP = 29;
  AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_SHOPPINGCART = 31;
  AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_TIERED = 32;
  AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_EVENT = 33;
  AOfferHubBaseStatusIcon.PRIORITY_ALLIANCE_PRIME_TIME = 40;
  AOfferHubBaseStatusIcon.PRIORITY_ALLIANCE_TIME_CHALLENGE = 41;
  AOfferHubBaseStatusIcon.INNER_ICON_SIZE = 55;
  return AOfferHubBaseStatusIcon;
}(__dep_export_ACastleLabeledStatusIcon.ACastleLabeledStatusIcon);
exports.AOfferHubBaseStatusIcon = __s0local1;
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
