Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_UnlockPrebuiltCastleForRubies = require("gge-module:export_UnlockPrebuiltCastleForRubies");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function UnlockPrebuiltCastleForResourcesOrRubies(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.subLayerDisp.btn_buyWithResources);
    __s3local0.txt_btn_0 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_buyWithResources.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.txt_btn_0.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnlockPrebuiltCastleForResourcesOrRubies, __s1param0);
  UnlockPrebuiltCastleForResourcesOrRubies.prototype.update = function (__s5param0) {
    __s1param0.prototype.update.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_buyWithResources, true);
    this.txt_btn_0.textContentVO.textId = this.unlockButtonTextId;
  };
  UnlockPrebuiltCastleForResourcesOrRubies.prototype.updateCosts = function (__s7param0) {
    __s1param0.prototype.updateCosts.call(this, __s7param0);
    var __s7local0 = 0;
    for (var __s7local1 = 0; __s7local1 < __s7param0.primaryCosts.length; ++__s7local1) {
      var __s7local2 = __s7param0.primaryCosts.getItemByIndex(__s7local1);
      if (__s7local2.itemType != __dep_export_CollectableEnum.CollectableEnum.C2) {
        this.renderCost(__s7local2, this.subLayerDisp["mc_res" + __s7local0++], UnlockPrebuiltCastleForResourcesOrRubies.SMALL_COST_SIZE);
      }
    }
  };
  Object.defineProperty(UnlockPrebuiltCastleForResourcesOrRubies.prototype, "unlockTypeTextId", {
    get: function () {
      return "resource";
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnlockPrebuiltCastleForRubies.UnlockPrebuiltCastleForRubies.prototype, "unlockTypeTextId").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  UnlockPrebuiltCastleForResourcesOrRubies.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (__s16param0.target == this.subLayerDisp.btn_buyWithResources) {
      this.buyPrebuiltCastle(this.bindFunction(this.onUnlockRequestSent_0));
    }
  };
  UnlockPrebuiltCastleForResourcesOrRubies.prototype.onUnlockRequestSent_0 = function () {
    this.disableUntilResponse(this.subLayerDisp.btn_buy);
    this.disableUntilResponse(this.subLayerDisp.btn_buyWithResources);
  };
  UnlockPrebuiltCastleForResourcesOrRubies.__initialize_static_members = function () {
    UnlockPrebuiltCastleForResourcesOrRubies.SMALL_COST_SIZE = new __s0local0(24, 24);
  };
  return UnlockPrebuiltCastleForResourcesOrRubies;
}(__dep_export_UnlockPrebuiltCastleForRubies.UnlockPrebuiltCastleForRubies);
exports.UnlockPrebuiltCastleForResourcesOrRubies = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
__s0local1.__initialize_static_members();
