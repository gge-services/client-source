Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function AModernPackageShopBuyElement() {
    var __s3local0 = __s1param0.call(this, null) || this;
    __s3local0._disp = (__s3local0._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip((__s3local0._elementType = __dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.getTypeByDataClass(__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(__s3local0))).assetClipName, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog.NAME))).currentshownDisplayObject;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AModernPackageShopBuyElement, __s1param0);
  AModernPackageShopBuyElement.prototype.init = function (__s5param0) {
    this._parentDialog = __s5param0;
  };
  AModernPackageShopBuyElement.prototype.destroy = function () {
    this._clip = null;
    __s1param0.prototype.destroy.call(this);
  };
  AModernPackageShopBuyElement.prototype.update = function () {};
  AModernPackageShopBuyElement.prototype.getDispHeight = function () {
    return this.disp.height;
  };
  Object.defineProperty(AModernPackageShopBuyElement.prototype, "parentDialog", {
    get: function () {
      return this._parentDialog;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernPackageShopBuyElement.prototype, "elementType", {
    get: function () {
      return this._elementType;
    },
    enumerable: true,
    configurable: true
  });
  return AModernPackageShopBuyElement;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.AModernPackageShopBuyElement = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __dep_export_ModernPackageShopBuyElementEnum = require("gge-module:export_ModernPackageShopBuyElementEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
