Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function AOfferHubItemStatusIcon(__s3param0, __s3param1 = null, __s3param2 = __dep_exact_f855840627e6e145.int(__dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_LOW), __s3param3 = null) {
    var __s3local0 = this;
    __s3local0._isNew = true;
    CONSTRUCTOR_HACK;
    __s3param3 ||= {};
    __s3param3.icon = __s3param0;
    (__s3local0 = __s1param0.call(this, "Btn_OfferHubItem", "txt_label", __s3param1, __s3param2, __s3param3) || this).iconClip.doWhenLoaded(__s3local0.bindFunction(__s3local0.initInnerIconOnLoaded));
    __s3local0.allowCaching = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AOfferHubItemStatusIcon, __s1param0);
  AOfferHubItemStatusIcon.prototype.preInit = function (__s5param0 = null) {
    __s1param0.prototype.preInit.call(this, __s5param0);
    this._innerIconClassName = this.getOfferHubIconName(__s5param0.icon);
    this._innerIconClip = __dep_export_ACastleStatusIcon.ACastleStatusIcon.getAsExternalClip(this._innerIconClassName);
  };
  AOfferHubItemStatusIcon.prototype.getOfferHubIconName = function (__s7param0) {
    var __s7local0 = __s7param0 + AOfferHubItemStatusIcon.OFFERHUB_ICON_SUFFIX;
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local0)) {
      return __s7local0;
    } else {
      return __s7param0;
    }
  };
  AOfferHubItemStatusIcon.prototype.initInnerIconOnLoaded = function (__s11param0) {
    if (this._innerIconClip) {
      this._innerIconClip.doWhenLoaded(this.bindFunction(this.onInnerIconClipLoaded));
    }
  };
  AOfferHubItemStatusIcon.prototype.initLoaded = function (__s14param0 = null) {
    this.allowCaching = false;
    __s1param0.prototype.initLoaded.call(this, __s14param0);
    this.icon.basicButton.removeMouseEventListener();
    this.icon.btn_favourite.visible = false;
    this.icon.mouseChildren = true;
    this.icon.mc_hit.mouseChildren = false;
    this.icon.mc_hit.actLikeButton = true;
  };
  AOfferHubItemStatusIcon.prototype.hideLoaded = function (__s16param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s16param0);
    this.icon.icon_new.visible = true;
    this._isNew = true;
  };
  AOfferHubItemStatusIcon.prototype.setAsSeen = function () {
    this.icon.icon_new.visible = false;
    this._isNew = false;
  };
  AOfferHubItemStatusIcon.prototype.onMouseOver = function (__s20param0) {
    __s1param0.prototype.onMouseOver.call(this, __s20param0);
  };
  Object.defineProperty(AOfferHubItemStatusIcon.prototype, "innerIconClassName", {
    get: function () {
      return this._innerIconClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AOfferHubItemStatusIcon.prototype, "isNew", {
    get: function () {
      return this._isNew;
    },
    enumerable: true,
    configurable: true
  });
  AOfferHubItemStatusIcon.prototype.hitDisp = function () {
    return this.icon.mc_hit;
  };
  AOfferHubItemStatusIcon.OFFERHUB_ICON_SUFFIX = "_Hub";
  return AOfferHubItemStatusIcon;
}(require("gge-module:export_AOfferHubBaseStatusIcon").AOfferHubBaseStatusIcon);
exports.AOfferHubItemStatusIcon = __s0local0;
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
