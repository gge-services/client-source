Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleEquipmentSublayer = require("gge-module:export_CastleEquipmentSublayer");
var __dep_export_CastleCraftingSublayer = require("gge-module:export_CastleCraftingSublayer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
var __dep_export_C2SGetNewRelicsEventVO = require("gge-module:export_C2SGetNewRelicsEventVO");
var __s0local0 = function (__s1param0) {
  function CastleEquipmentDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleEquipmentDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentDialog, __s1param0);
  CastleEquipmentDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    var __s5local0 = [this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_tab_general, this.dialogDisp.btn_tab_baron, this.dialogDisp.btn_tab_crafting];
    this.initBasicButtons(__s5local0);
    this.dialogDisp.btn_tab_general.toolTipText = "equipment_itemType_general";
    this.dialogDisp.btn_tab_baron.toolTipText = "equipment_itemType_baron";
    this.dialogDisp.btn_tab_crafting.toolTipText = "dialog_equipmentCrafting_title";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.equipmentScreen = new __dep_export_CastleEquipmentSublayer.CastleEquipmentSublayer(this.dialogDisp.component_equipment);
    this.craftingScreen = new __dep_export_CastleCraftingSublayer.CastleCraftingSublayer(this.dialogDisp.component_crafting);
  };
  CastleEquipmentDialog.prototype.showLoaded = function (__s7param0) {
    var __s7local0;
    if (__s7param0 === undefined) {
      __s7param0 = null;
    }
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.getFavoriteEquipmentSignal.dispatch();
    this.equipmentScreen.applyProperties(this.dialogProperties);
    this.craftingScreen.hide();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_help, __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tab_baron, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tab_crafting, this.isOutOfTutorial());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetNewRelicsEventVO.C2SGetNewRelicsEventVO());
    this.equipmentScreen.inventoryUpdatedSignal.add(this.bindFunction(this.onInventoryUpdated));
    this.equipmentScreen.gemTabSwitchedSignal.add(this.bindFunction(this.onGemTabSwitched));
    this.equipmentScreen.show(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER);
    if (this.dialogProperties && this.dialogProperties.tabState == CastleEquipmentDialog.CRAFTING) {
      this.tabState = CastleEquipmentDialog.CRAFTING;
      this.craftingScreen.show(null);
      this.equipmentScreen.dialogDisp.visible = false;
      this.switchTab(CastleEquipmentDialog.CRAFTING);
      this.tabState = CastleEquipmentDialog.CRAFTING;
    } else {
      if (this.properties && this.dialogProperties.selectedLordID >= 0) {
        __s7local0 = __dep_export_CastleModel.CastleModel.lordData.getLordByID(this.dialogProperties.selectedLordID);
      }
      if (__s7local0 && __s7local0.isBaron) {
        this.switchTab(CastleEquipmentDialog.CASTELLAN);
        this.tabState = CastleEquipmentDialog.CASTELLAN;
      } else {
        this.switchTab(CastleEquipmentDialog.COMMANDER);
        this.tabState = CastleEquipmentDialog.COMMANDER;
      }
    }
  };
  CastleEquipmentDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_tab_general:
        this.tabState = CastleEquipmentDialog.COMMANDER;
        if (this.equipmentScreen.lastLordType != __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER) {
          __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
          this.craftingScreen.hide();
          this.equipmentScreen.dialogDisp.visible = true;
          this.equipmentScreen.show(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER);
          this.equipmentScreen.setLordCategory(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER, true);
          this.equipmentScreen.lastLordType = __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER;
          this.switchTab(CastleEquipmentDialog.COMMANDER);
        }
        break;
      case this.dialogDisp.btn_tab_baron:
        this.tabState = CastleEquipmentDialog.CASTELLAN;
        if (this.equipmentScreen.lastLordType != __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON) {
          __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
          this.craftingScreen.hide();
          this.equipmentScreen.dialogDisp.visible = true;
          this.equipmentScreen.show(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON);
          this.equipmentScreen.setLordCategory(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON, true);
          this.equipmentScreen.lastLordType = __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON;
          this.switchTab(CastleEquipmentDialog.CASTELLAN);
        }
        break;
      case this.dialogDisp.btn_tab_crafting:
        if (this.tabState != CastleEquipmentDialog.CRAFTING) {
          this.tabState = CastleEquipmentDialog.CRAFTING;
          __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
          this.equipmentScreen.removeEventListener();
          this.craftingScreen.show(null);
          this.equipmentScreen.dialogDisp.visible = false;
          this.equipmentScreen.clearFavoriteOptions();
          this.switchTab(CastleEquipmentDialog.CRAFTING);
          this.equipmentScreen.lastLordType = null;
        }
        break;
      case this.dialogDisp.btn_help:
        var __s15local0 = this.getHelpTextId();
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(__s15local0));
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleEquipmentDialog.prototype.getHelpTextId = function () {
    var __s21local0 = "help_equipment";
    switch (this.tabState) {
      case CastleEquipmentDialog.CASTELLAN:
        __s21local0 = "help_equipment";
        break;
      case CastleEquipmentDialog.CRAFTING:
        __s21local0 = "help_equipmentCrafting";
        break;
      case CastleEquipmentDialog.GEMS:
        __s21local0 = "help_insertGems";
    }
    return __s21local0;
  };
  CastleEquipmentDialog.prototype.hideLoaded = function (__s24param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s24param0);
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
    this.equipmentScreen.hide();
    this.equipmentScreen.clearFavoriteOptions();
    this.craftingScreen.hide();
    this.equipmentScreen.inventoryUpdatedSignal.remove(this.bindFunction(this.onInventoryUpdated));
    this.equipmentScreen.gemTabSwitchedSignal.remove(this.bindFunction(this.onGemTabSwitched));
  };
  CastleEquipmentDialog.prototype.onGemTabSwitched = function () {
    this.tabState = CastleEquipmentDialog.GEMS;
  };
  CastleEquipmentDialog.prototype.switchTab = function (__s28param0) {
    this.dialogDisp.btn_tab_general.gotoAndStop(2);
    this.dialogDisp.btn_tab_baron.gotoAndStop(2);
    this.dialogDisp.btn_tab_crafting.gotoAndStop(2);
    this.dialogDisp.btn_tab_general.gotoAndStop(__s28param0 == CastleEquipmentDialog.COMMANDER ? 1 : 2);
    this.dialogDisp.btn_tab_baron.gotoAndStop(__s28param0 == CastleEquipmentDialog.CASTELLAN ? 1 : 2);
    this.dialogDisp.btn_tab_crafting.gotoAndStop(__s28param0 == CastleEquipmentDialog.CRAFTING ? 1 : 2);
  };
  CastleEquipmentDialog.prototype.onInventoryUpdated = function () {
    this.dialogDisp.btn_tab_general.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordTypeNewRelic(__dep_exact_26a421b704832cff.EquipmentConst.COMMANDER_WEARER_ID);
    this.dialogDisp.btn_tab_baron.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordTypeNewRelic(__dep_exact_26a421b704832cff.EquipmentConst.BARON_WEARER_ID);
  };
  Object.defineProperty(CastleEquipmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentDialog.NAME = "CastleEquipment_ARE3";
  CastleEquipmentDialog.MAX_WIDTH = 53;
  CastleEquipmentDialog.MAX_HEIGHT = 53;
  CastleEquipmentDialog.CASTELLAN = "castellan";
  CastleEquipmentDialog.COMMANDER = "commander";
  CastleEquipmentDialog.CRAFTING = "crafting";
  CastleEquipmentDialog.GEMS = "gems";
  return CastleEquipmentDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleEquipmentDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
