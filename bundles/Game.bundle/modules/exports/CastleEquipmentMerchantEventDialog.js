Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SEquipmentSpaceLeftVO = require("gge-module:export_C2SEquipmentSpaceLeftVO");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleEquipmentMerchantEventDialog() {
    return __s1param0.call(this, CastleEquipmentMerchantEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentMerchantEventDialog, __s1param0);
  CastleEquipmentMerchantEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentMerchantEvent_title"));
    this.itxt_storage = this.textFieldManager.registerTextField(this.dialogDisp.mc_storageSpace.txt_storage, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.dialogDisp.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_storageSpace.mouseChildren = false;
    this.itxt_storageGem = this.textFieldManager.registerTextField(this.dialogDisp.mc_storageSpaceGem.txt_storage, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.dialogDisp.mc_storageSpaceGem.toolTipText = "dialog_gemSpace_tooltip";
    this.dialogDisp.mc_storageSpaceGem.mouseChildren = false;
  };
  CastleEquipmentMerchantEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateStorageText();
    this.lockDialog();
  };
  CastleEquipmentMerchantEventDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SEquipmentSpaceLeftVO.C2SEquipmentSpaceLeftVO());
  };
  CastleEquipmentMerchantEventDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
  };
  CastleEquipmentMerchantEventDialog.prototype.onInventorySpace = function (__s13param0) {
    this.updateStorageText();
    this.unLockDialog();
  };
  CastleEquipmentMerchantEventDialog.prototype.updateStorageText = function () {
    this.itxt_storage.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.equipData.filledInventorySpace, __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace];
    this.itxt_storage.color = __dep_export_CastleModel.CastleModel.equipData.isInventoryFull ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.itxt_storageGem.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.gemData.filledInventorySpace, __dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace];
    this.itxt_storageGem.color = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  Object.defineProperty(CastleEquipmentMerchantEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_EquipmentMerchantScrollItem.EquipmentMerchantScrollItem;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentMerchantEventDialog.NAME = "CastleEquipmentMerchantEvent";
  return CastleEquipmentMerchantEventDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleEquipmentMerchantEventDialog = __s0local0;
var __dep_export_EquipmentMerchantScrollItem = require("gge-module:export_EquipmentMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
