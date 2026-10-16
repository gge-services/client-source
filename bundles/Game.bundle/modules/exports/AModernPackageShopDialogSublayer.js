Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SGetPackageBuyCountVO = require("gge-module:export_C2SGetPackageBuyCountVO");
var __dep_export_CastlePackageEvent = require("gge-module:export_CastlePackageEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AModernPackageShopDialogSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AModernPackageShopDialogSublayer, __s1param0);
  AModernPackageShopDialogSublayer.prototype.init = function () {
    this._listComponent = new __dep_export_ModernPackageShopList.ModernPackageShopList(this.dialogDisp.mc_itemList);
  };
  AModernPackageShopDialogSublayer.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this.controller.addEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    this.updateCurrency();
    this._listComponent.onShow();
    this._listComponent.updateWithNewData([], this.getEventVO(), this.getBuyType());
    var __s7local0 = this.getTargetAreaID();
    var __s7local1 = this.getTargetKingdomID();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetPackageBuyCountVO.C2SGetPackageBuyCountVO(__s7local0, __s7local1));
  };
  AModernPackageShopDialogSublayer.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this._listComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  AModernPackageShopDialogSublayer.prototype.updateCurrency = function () {
    var __s11local0 = this.getCurrencyType();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_currency), __dep_export_CollectableHelper.CollectableHelper.createVO(__s11local0.type, __dep_export_CostHelper.CostHelper.getAvailableGoods(__s11local0), __s11local0.id), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(50, 50)));
  };
  AModernPackageShopDialogSublayer.prototype.getEventPackages = function () {
    return null;
  };
  AModernPackageShopDialogSublayer.prototype.getFilteredPackages = function () {
    return this.getEventPackages();
  };
  AModernPackageShopDialogSublayer.prototype.getCurrencyType = function () {
    return null;
  };
  AModernPackageShopDialogSublayer.prototype.getEventVO = function () {
    return null;
  };
  AModernPackageShopDialogSublayer.prototype.getBuyType = function () {
    return -1;
  };
  AModernPackageShopDialogSublayer.prototype.getBuyTypeId = function () {
    return -1;
  };
  AModernPackageShopDialogSublayer.prototype.getTargetKingdomID = function () {
    return __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID;
  };
  AModernPackageShopDialogSublayer.prototype.getTargetAreaID = function () {
    var __s27local0 = this.getTargetKingdomID();
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __s27local0) != null) {
      return __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId;
    } else {
      return __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s27local0).objectId;
    }
  };
  AModernPackageShopDialogSublayer.prototype.onSpecialUserCurrencyUpdate = function (__s31param0) {
    this.updateCurrency();
  };
  AModernPackageShopDialogSublayer.prototype.onPackageInfoArrived = function (__s33param0) {
    this.controller.removeEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    this._listComponent.updateWithNewData(this.getFilteredPackages(), this.getEventVO(), this.getBuyType(), this.getBuyTypeId());
  };
  Object.defineProperty(AModernPackageShopDialogSublayer.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return AModernPackageShopDialogSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.AModernPackageShopDialogSublayer = __s0local1;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_ModernPackageShopList = require("gge-module:export_ModernPackageShopList");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
