Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AUnlockPrebuiltCastle = require("gge-module:export_AUnlockPrebuiltCastle");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function UnlockPrebuiltCastleForRubies(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.subLayerDisp.btn_buy);
    __s3local0.txt_btn = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_buy.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.txt_btn.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.txt_discount = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_rubies.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnlockPrebuiltCastleForRubies, __s1param0);
  UnlockPrebuiltCastleForRubies.prototype.update = function (__s5param0) {
    __s1param0.prototype.update.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_buy, true);
    this.subLayerDisp.mc_rubies.mc_discount.visible = __s5param0.shownDiscount;
    this.txt_discount.textContentVO.textReplacements = [__s5param0.shownDiscount];
    this.txt_btn.textContentVO.textId = this.unlockButtonTextId;
    this.updateCosts(__s5param0);
  };
  UnlockPrebuiltCastleForRubies.prototype.updateCosts = function (__s7param0) {
    this.destroyCollectableRenderList();
    if (__s7param0.costC2) {
      this.renderCost(__s7param0.costC2, this.subLayerDisp.mc_rubies, UnlockPrebuiltCastleForRubies.BIG_COST_SIZE);
    }
  };
  UnlockPrebuiltCastleForRubies.prototype.renderCost = function (__s10param0, __s10param1, __s10param2) {
    var __s10local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
    __s10local0.addItemMc(__s10param1);
    __s10local0.addIconMc(__s10param1.mc_icon);
    __s10local0.addTextfield(__s10param1.txt_amount);
    var __s10local1 = new __dep_export_CollectableRenderer.CollectableRenderer(__s10local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, __s10param2));
    __s10local1.updateWithNewVO(__s10param0);
    var __s10local2 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
    var __s10local3 = __dep_export_CostHelper.CostHelper.getAvailableGoodsFromDetailedCastleVO(__s10local2, new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s10param0)) >= __s10param0.amount;
    __s10local0.textfield.textColor = __s10local3 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    this.collectableRenderList.push(__s10local1);
  };
  Object.defineProperty(UnlockPrebuiltCastleForRubies.prototype, "unlockTypeTextId", {
    get: function () {
      return "c2";
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnlockPrebuiltCastle.AUnlockPrebuiltCastle.prototype, "unlockTypeTextId").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  UnlockPrebuiltCastleForRubies.prototype.onClick = function (__s16param0) {
    if (__s16param0.target == this.subLayerDisp.btn_buy) {
      this.buyPrebuiltCastle(this.bindFunction(this.onUnlockRequestSent), true);
    }
  };
  UnlockPrebuiltCastleForRubies.prototype.onUnlockRequestSent = function () {
    this.disableUntilResponse(this.subLayerDisp.btn_buy);
  };
  UnlockPrebuiltCastleForRubies.__initialize_static_members = function () {
    UnlockPrebuiltCastleForRubies.BIG_COST_SIZE = new __s0local0(36, 36);
  };
  return UnlockPrebuiltCastleForRubies;
}(__dep_export_AUnlockPrebuiltCastle.AUnlockPrebuiltCastle);
exports.UnlockPrebuiltCastleForRubies = __s0local1;
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
__s0local1.__initialize_static_members();
