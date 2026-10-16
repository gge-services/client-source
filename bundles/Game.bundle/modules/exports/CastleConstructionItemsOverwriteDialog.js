Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SConstructionItemModeEnum = require("gge-module:export_C2SConstructionItemModeEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsOverwriteDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleConstructionItemsOverwriteDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsOverwriteDialog, __s1param0);
  CastleConstructionItemsOverwriteDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ciOverwrite_header"));
    this.itxt_info = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ciOverwrite_info"));
    this.itxt_info_temp = this.textFieldManager.registerTextField(this.dialogDisp.mc_temporary.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ciOverwrite_tempCI_info_01"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bottom, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ciOverwrite_quickReplace"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_extract.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ciOverwrite_button"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_currency, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.dialogDisp.mc_currencyTooltip.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
  };
  CastleConstructionItemsOverwriteDialog.prototype.initBasicButtons = function (__s7param0) {
    __s7param0 = __s7param0.concat([this.dialogDisp.btn_extract]);
    __s1param0.prototype.initBasicButtons.call(this, __s7param0);
  };
  CastleConstructionItemsOverwriteDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    var __s9local0 = this.dialogProperties.constructionItemVO;
    var __s9local1 = this.dialogProperties.buildingVO.getConstructionItem(this.dialogProperties.slotVO);
    this.itxt_cost.textContentVO.numberValue = __s9local1.removalCostC1;
    var __s9local2 = __dep_export_CastleModel.CastleModel.currencyData.c1Amount >= __s9local1.removalCostC1;
    this.itxt_cost.color = __s9local2 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    if (__s9local1.isAppearanceItem) {
      this.itxt_info.textContentVO.textId = "dialog_ciOverwrite_apperance_info";
      this.itxt_info.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s9local1.nameTextId), __s9local1.rarityTextId, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s9local0.nameTextId), __s9local0.rarityTextId];
    } else {
      this.itxt_info.textContentVO.textId = "dialog_ciOverwrite_info";
      this.itxt_info.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s9local1.nameTextId), __s9local1.level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s9local0.nameTextId), __s9local0.level];
    }
    this.itxt_info_temp.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s9local1.nameTextId), __s9local1.rarityTextId, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s9local0.nameTextId), __s9local0.rarityTextId];
    var __s9local3 = this.dialogProperties.constructionItemVO.isAppearanceItem;
    this.dialogDisp.mc_overwrite.visible = !__s9local3;
    this.dialogDisp.mc_overwriteAppearance.visible = __s9local3;
    this.renderOverwriteChart(__s9local3 ? this.dialogDisp.mc_overwriteAppearance : this.dialogDisp.mc_overwrite);
    var __s9local4 = __dep_export_CastleModel.CastleModel.constructionItemData.isInventoryFull;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_extract, !__s9local4);
    this.dialogDisp.btn_extract.toolTipText = __s9local4 ? "dialog_ciExtract_fullInventory_tooltip" : "";
    this.dialogDisp.mc_temporary.visible = __s9local1.isTemporary;
  };
  CastleConstructionItemsOverwriteDialog.prototype.renderOverwriteChart = function (__s13param0) {
    var __s13local0 = this.dialogProperties.buildingVO;
    var __s13local1 = this.dialogProperties.constructionItemVO;
    var __s13local2 = __s13local0.getConstructionItem(this.dialogProperties.slotVO);
    this.renderConstructionItem(__s13local1, __s13param0.mc_newItem, false, __s13param0.mc_timerNew);
    this.renderConstructionItem(__s13local2, __s13param0.mc_oldItem, true, __s13param0.mc_timerOld);
    this.renderBuilding(__s13local0, __s13param0.mc_current);
    if (__s13local1.isAppearanceItem) {
      this.renderBuilding(__s13local1.skinnedBuildingVO, __s13param0.mc_result);
    }
  };
  CastleConstructionItemsOverwriteDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target) && __s16param0.target == this.dialogDisp.btn_extract) {
      this.onClickExtract();
    }
  };
  CastleConstructionItemsOverwriteDialog.prototype.onClickAccept = function () {
    this.sendReplaceCommand(__dep_export_C2SConstructionItemModeEnum.C2SConstructionItemModeEnum.OVERWRITE);
    this.hide();
  };
  CastleConstructionItemsOverwriteDialog.prototype.onClickExtract = function () {
    this.sendReplaceCommand(__dep_export_C2SConstructionItemModeEnum.C2SConstructionItemModeEnum.REPLACE);
    this.hide();
  };
  CastleConstructionItemsOverwriteDialog.NAME = "CastleConstructionItemsOverwrite_Z";
  return CastleConstructionItemsOverwriteDialog;
}(require("gge-module:export_AConstructionItemsActionDialog").AConstructionItemsActionDialog);
exports.CastleConstructionItemsOverwriteDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
