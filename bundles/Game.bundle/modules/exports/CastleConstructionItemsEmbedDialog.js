Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SConstructionItemModeEnum = require("gge-module:export_C2SConstructionItemModeEnum");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsEmbedDialog() {
    return __s1param0.call(this, CastleConstructionItemsEmbedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsEmbedDialog, __s1param0);
  CastleConstructionItemsEmbedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ciAssign_header"));
  };
  CastleConstructionItemsEmbedDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.dialogProperties.constructionItemVO;
    this.itxt_info = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local0.isAppearanceItem ? __s7local0.isTemporary ? "dialog_ciAssign_tempCI_info" : "dialog_ciAssign_appearance_info" : "dialog_ciAssign_info"));
    this.itxt_info.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local0.nameTextId), __s7local0.level];
    var __s7local1 = __s7local0.isAppearanceItem;
    this.dialogDisp.mc_embed.visible = !__s7local1;
    this.dialogDisp.mc_appearanceEmbed.visible = __s7local1;
    this.renderEmbedChart(__s7local1 ? this.dialogDisp.mc_appearanceEmbed : this.dialogDisp.mc_embed);
  };
  CastleConstructionItemsEmbedDialog.prototype.renderEmbedChart = function (__s9param0) {
    var __s9local0 = this.dialogProperties.buildingVO;
    var __s9local1 = this.dialogProperties.constructionItemVO;
    this.renderConstructionItem(__s9local1, __s9param0.mc_item, false, __s9param0.mc_timer);
    this.renderBuilding(__s9local0, __s9param0.mc_current);
    if (__s9local1.isAppearanceItem) {
      this.renderBuilding(__s9local1.skinnedBuildingVO, __s9param0.mc_result);
    }
  };
  CastleConstructionItemsEmbedDialog.prototype.onClickAccept = function () {
    this.sendReplaceCommand(__dep_export_C2SConstructionItemModeEnum.C2SConstructionItemModeEnum.ADD);
    this.hide();
  };
  CastleConstructionItemsEmbedDialog.NAME = "CastleConstructionItemsEmbed_Z";
  return CastleConstructionItemsEmbedDialog;
}(require("gge-module:export_AConstructionItemsActionDialog").AConstructionItemsActionDialog);
exports.CastleConstructionItemsEmbedDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
