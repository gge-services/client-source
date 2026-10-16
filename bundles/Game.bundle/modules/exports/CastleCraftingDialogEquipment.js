Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleEquipmentSlotVO = require("gge-module:export_CastleEquipmentSlotVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleCraftingAnimationEquipment = require("gge-module:export_CastleCraftingAnimationEquipment");
var __dep_export_CastleCraftingNewItemAnimation = require("gge-module:export_CastleCraftingNewItemAnimation");
var __s0local0 = function (__s1param0) {
  function CastleCraftingDialogEquipment(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itxt_value = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_price.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.btn_craft]);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_equipmentCrafting_desc"));
    __s3local0.subLayerDisp.mc_price.mouseChildren = false;
    for (var __s3local1 = 0; __s3local1 < 6; __s3local1++) {
      __s3local0.subLayerDisp["slot" + __s3local1].mouseChildren = false;
    }
    __s3local0._craftingAnimation = new __dep_export_CastleCraftingAnimationEquipment.CastleCraftingAnimationEquipment(__s3local0.subLayerDisp.mc_animation, __s3local0);
    __s3local0._newItemAnimation = new __dep_export_CastleCraftingNewItemAnimation.CastleCraftingNewItemAnimation();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCraftingDialogEquipment, __s1param0);
  CastleCraftingDialogEquipment.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.resetVEs();
  };
  CastleCraftingDialogEquipment.prototype.resetVEs = function () {
    this.subLayerDisp.mc_price.toolTipText = "cash";
    this.subLayerDisp.btn_craft.toolTipText = "dialog_equipmentCrafting_cantCraft";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, false);
    if (this.itxt_value.textContentVO) {
      this.itxt_value.textContentVO.numberValue = 0;
    }
    this.initSlots();
  };
  CastleCraftingDialogEquipment.prototype.initSlots = function () {
    this._allSlotsOnScreen = [];
    for (var __s12local0 = 0; __s12local0 < CastleCraftingDialogEquipment.SLOTS_ON_SCREEN; __s12local0++) {
      var __s12local1 = this.subLayerDisp["slot" + __s12local0];
      __s12local1.actLikeButton = true;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s12local1.mc_itemHolder);
      __s12local1.toolTipText = "dialog_equipment_craftEquipment_insertEquipment_tooltip";
      __s12local1.mc_bg.gotoAndStop(1);
      __s12local1.slotVO = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL);
      __s12local1.mc_lock.visible = false;
      __s12local1.mc_deco.gotoAndStop(__s12local0 + 1);
      this._allSlotsOnScreen.push(__s12local1);
    }
    this.resultSlot.mc_lock.visible = false;
    this.resultSlot.toolTipText = "dialog_equipment_craftEquipment_middleSlotEmpty_tooltip";
    this.resultSlot.mc_deco.gotoAndStop(7);
    this.resultSlot.mc_bg.gotoAndStop(1);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_animation);
  };
  CastleCraftingDialogEquipment.prototype.onMouseOver = function (__s16param0) {
    __s1param0.prototype.onMouseOver.call(this, __s16param0);
    if (this._clickHandler) {
      this._clickHandler.handleDialogMouseOver(__s16param0);
    }
  };
  Object.defineProperty(CastleCraftingDialogEquipment.prototype, "clickHandler", {
    set: function (__s19param0) {
      this._clickHandler = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogEquipment.prototype, "allSlotsOnScreen", {
    get: function () {
      return this._allSlotsOnScreen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogEquipment.prototype, "resultSlot", {
    get: function () {
      return this.subLayerDisp.slot6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogEquipment.prototype, "price", {
    set: function (__s25param0) {
      this.itxt_value.textContentVO.numberValue = __s25param0;
      this.itxt_value.color = __dep_export_CastleModel.CastleModel.currencyData.c1Amount < __s25param0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingDialogEquipment.prototype.startCraftAnimation = function (__s27param0, __s27param1, __s27param2) {
    this._craftingAnimation.doEQAnimation(__s27param0, __s27param1, __s27param2);
  };
  CastleCraftingDialogEquipment.prototype.clearCenterSlot = function () {
    this._craftingAnimation.clearCenterSlot();
  };
  CastleCraftingDialogEquipment.prototype.startNewItemAnimation = function (__s31param0, __s31param1) {
    this._newItemAnimation.playAnimation(__s31param0, __s31param1);
  };
  CastleCraftingDialogEquipment.__initialize_static_members = function () {
    CastleCraftingDialogEquipment.SLOTS_ON_SCREEN = 6;
  };
  return CastleCraftingDialogEquipment;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleCraftingDialogEquipment = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
