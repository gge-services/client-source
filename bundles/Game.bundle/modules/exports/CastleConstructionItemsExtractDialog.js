Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SRemoveConstructionItemVO = require("gge-module:export_C2SRemoveConstructionItemVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsExtractDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleConstructionItemsExtractDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsExtractDialog, __s1param0);
  CastleConstructionItemsExtractDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ciExtract_header"));
    this.itxt_info = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ciExtract_info"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_currency, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.dialogDisp.mc_currencyTooltip.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
  };
  CastleConstructionItemsExtractDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.dialogProperties.constructionItemVO;
    this.itxt_cost.textContentVO.numberValue = __s7local0.removalCostC1;
    var __s7local1 = __dep_export_CastleModel.CastleModel.currencyData.c1Amount >= __s7local0.removalCostC1;
    this.itxt_cost.color = __s7local1 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    if (__s7local0.isAppearanceItem) {
      this.itxt_info.textContentVO.textId = "dialog_ciExtract_apperance_info";
      this.itxt_info.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0.nameTextId), __s7local0.rarityTextId];
    } else {
      this.itxt_info.textContentVO.textId = "dialog_ciExtract_info";
      this.itxt_info.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0.nameTextId), __s7local0.level];
    }
    var __s7local2 = __s7local0.isAppearanceItem;
    this.dialogDisp.mc_extraction.visible = !__s7local2;
    this.dialogDisp.mc_appearanceExtraction.visible = __s7local2;
    this.renderExtractionChart(__s7local2 ? this.dialogDisp.mc_appearanceExtraction : this.dialogDisp.mc_extraction);
    var __s7local3 = __dep_export_CastleModel.CastleModel.constructionItemData.isInventoryFull;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_accept, !__s7local3);
    this.dialogDisp.btn_accept.toolTipText = __s7local3 ? "dialog_ciExtract_fullInventory_tooltip" : "";
  };
  CastleConstructionItemsExtractDialog.prototype.renderExtractionChart = function (__s11param0) {
    var __s11local0 = this.dialogProperties.buildingVO;
    var __s11local1 = this.dialogProperties.constructionItemVO;
    this.renderConstructionItem(__s11local1, __s11param0.mc_item);
    this.renderBuilding(__s11local0, __s11param0.mc_current);
    if (__s11local1.isAppearanceItem) {
      var __s11local2 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s11local0.wodId);
      this.renderBuilding(__s11local2, __s11param0.mc_result);
    }
  };
  CastleConstructionItemsExtractDialog.prototype.onClickAccept = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRemoveConstructionItemVO.C2SRemoveConstructionItemVO(this.dialogProperties.buildingVO.objectId, this.dialogProperties.constructionItemVO.id, this.dialogProperties.slotVO.index, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId));
    this.hide();
  };
  CastleConstructionItemsExtractDialog.__initialize_static_members = function () {
    CastleConstructionItemsExtractDialog.NAME = "CastleConstructionItemsExtract";
  };
  return CastleConstructionItemsExtractDialog;
}(require("gge-module:export_AConstructionItemsActionDialog").AConstructionItemsActionDialog);
exports.CastleConstructionItemsExtractDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
