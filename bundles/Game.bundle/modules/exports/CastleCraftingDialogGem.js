Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleCraftingAnimationEquipment = require("gge-module:export_CastleCraftingAnimationEquipment");
var __dep_export_CastleCraftingGemFailedAnimation = require("gge-module:export_CastleCraftingGemFailedAnimation");
var __dep_export_CastleCraftingNewItemAnimation = require("gge-module:export_CastleCraftingNewItemAnimation");
var __s0local0 = function (__s1param0) {
  function CastleCraftingDialogGem(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).initBasicButtons([__s3local0.subLayerDisp.btn_craft, __s3local0.subLayerDisp.btn_craftRubies]);
    __s3local0._newItemAnimation = new __dep_export_CastleCraftingNewItemAnimation.CastleCraftingNewItemAnimation();
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_gems_craftGems_description"));
    __s3local0.itxt_upgradeChance = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_upgradeChance.txt_chance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    __s3local0.itxt_upgradeResult = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_resultInfo.txt_result, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_price = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_price.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.subLayerDisp.mc_price.toolTipText = "cash";
    __s3local0.subLayerDisp.mc_upgradeChance.toolTipText = "dialog_gems_craftGems_gemUpgradeChance_tooltip";
    __s3local0.subLayerDisp.mc_resultInfo.mouseChildren = false;
    __s3local0.initComponents();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCraftingDialogGem, __s1param0);
  CastleCraftingDialogGem.prototype.initComponents = function () {
    this.cacheSlots();
    this.subLayerDisp.mc_price.mouseChildren = false;
    this.subLayerDisp.mc_upgradeChance.mouseChildren = false;
    this.subLayerDisp.mc_resultInfo.mouseChildren = false;
  };
  CastleCraftingDialogGem.prototype.cacheSlots = function () {
    this._allSlotsOnScreen = [];
    this._allConnectionBarMCs = [];
    for (var __s7local0 = 0; __s7local0 < CastleCraftingDialogGem.SLOTS_ON_SCREEN; __s7local0++) {
      var __s7local1 = this.subLayerDisp["slot" + __s7local0];
      __s7local1.mouseChildren = false;
      __s7local1.slotId = __s7local0;
      this._allSlotsOnScreen.push(__s7local1);
      var __s7local2 = this.subLayerDisp["mc_connectionBar" + __s7local0];
      if (__s7local2) {
        this._allConnectionBarMCs.push(__s7local2);
      }
    }
  };
  CastleCraftingDialogGem.prototype.show = function (__s12param0) {
    __s1param0.prototype.show.call(this, __s12param0);
    this.resetVEs();
  };
  CastleCraftingDialogGem.prototype.resetVEs = function () {
    this.setCraftButton(false, "dialog_gems_craftGems_gemSlotsMissing_tooltip");
    this.setCraftRubyButton(false, "dialog_gems_craftGems_gemSlotsMissing_tooltip");
    this.resetCostsAndChance(false);
    this.initSlots();
  };
  CastleCraftingDialogGem.prototype.resetCostsAndChance = function (__s16param0) {
    this.upgradePrice = 0;
    this.setUpgradeChance(0, __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
    if (__s16param0) {
      this.setUpgradeResult("", __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
    }
  };
  CastleCraftingDialogGem.prototype.initSlots = function () {
    if (this._allSlotsOnScreen != null) {
      for (var __s19local0 = 0, __s19local1 = this._allSlotsOnScreen; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          __s19local2.actLikeButton = true;
          __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s19local2.mc_itemHolder);
          __s19local2.mc_itemHolder.scaleX = __s19local2.mc_itemHolder.scaleY = 1.1;
          __s19local2.mc_bg.gotoAndStop(1);
          __s19local2.mc_lock.visible = false;
        }
      }
    }
  };
  CastleCraftingDialogGem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
  };
  CastleCraftingDialogGem.prototype.setCraftButton = function (__s27param0, __s27param1) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, __s27param0);
    this.subLayerDisp.btn_craft.toolTipText = __s27param1;
  };
  CastleCraftingDialogGem.prototype.setCraftRubyButton = function (__s29param0, __s29param1) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_craftRubies, __s29param0);
    this.subLayerDisp.btn_craftRubies.toolTipText = __s29param1;
  };
  Object.defineProperty(CastleCraftingDialogGem.prototype, "allSlotsOnScreen", {
    get: function () {
      return this._allSlotsOnScreen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogGem.prototype, "resultSlot", {
    get: function () {
      return this._allSlotsOnScreen[CastleCraftingDialogGem.SLOTS_ON_SCREEN - 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogGem.prototype, "upgradePrice", {
    set: function (__s35param0) {
      this.itxt_price.textContentVO.numberValue = __s35param0;
      this.itxt_price.color = __dep_export_CastleModel.CastleModel.currencyData.c1Amount < __s35param0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingDialogGem.prototype.setUpgradeChance = function (__s37param0, __s37param1) {
    this.itxt_upgradeChance.textContentVO.textReplacements = [__s37param0];
    this.itxt_upgradeChance.color = __s37param1;
  };
  CastleCraftingDialogGem.prototype.setUpgradeResult = function (__s39param0, __s39param1) {
    if (this.itxt_upgradeResult.textContentVO && this.itxt_upgradeResult.textContentVO) {
      this.itxt_upgradeResult.textContentVO.textId = __s39param0;
      this.itxt_upgradeResult.color = __s39param1;
    }
  };
  CastleCraftingDialogGem.prototype.playFailAnimation = function (__s42param0) {
    __dep_export_CastleCraftingGemFailedAnimation.CastleCraftingGemFailedAnimation.playAnimation(this._allSlotsOnScreen, __s42param0);
  };
  CastleCraftingDialogGem.prototype.playSuccessAnimation = function (__s44param0) {
    this._craftingAnimationEquip = new __dep_export_CastleCraftingAnimationEquipment.CastleCraftingAnimationEquipment(this.subLayerDisp.mc_animation, this);
    this._craftingAnimationEquip.doGemAnimation(__s44param0, this._allSlotsOnScreen, null);
  };
  CastleCraftingDialogGem.prototype.clearAnimationFinishedCallbacks = function () {
    __dep_export_CastleCraftingGemFailedAnimation.CastleCraftingGemFailedAnimation.callBack = null;
    if (this._craftingAnimationEquip) {
      this._craftingAnimationEquip.clearCallBacks();
    }
  };
  Object.defineProperty(CastleCraftingDialogGem.prototype, "allConnectionBarMCs", {
    get: function () {
      return this._allConnectionBarMCs;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingDialogGem.prototype.startNewItemAnimation = function (__s51param0, __s51param1) {
    this._newItemAnimation.playAnimation(__s51param0, __s51param1);
  };
  CastleCraftingDialogGem.__initialize_static_members = function () {
    CastleCraftingDialogGem.SLOTS_ON_SCREEN = 7;
  };
  return CastleCraftingDialogGem;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleCraftingDialogGem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
