Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleLegendSkillDialogProperties = require("gge-module:export_CastleLegendSkillDialogProperties");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLegendSkillDialog = require("gge-module:export_CastleLegendSkillDialog");
var __s0local0 = function (__s1param0) {
  function CastleMissingSceatSkillExpansionDialog() {
    return __s1param0.call(this, CastleMissingSceatSkillExpansionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMissingSceatSkillExpansionDialog, __s1param0);
  CastleMissingSceatSkillExpansionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleMissingSceatSkillExpansionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = __dep_export_CastleModel.CastleModel.legendSkillData.getSceatSkillByID(__dep_export_CastleModel.CastleModel.expansionCostsData.getSceatSkillLocked()).nameTextID;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_needLegendTemple_skill_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_needLegendTemple_skill_desc", [__s7local0])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_getSkill")));
  };
  CastleMissingSceatSkillExpansionDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onClickOk();
          this.hide();
      }
    }
  };
  CastleMissingSceatSkillExpansionDialog.prototype.onClickOk = function () {
    if (this.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyHomeCastle) {
      this.gotoSkill();
    } else {
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAAArrived));
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  };
  CastleMissingSceatSkillExpansionDialog.prototype.onJAAArrived = function (__s17param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAAArrived));
    this.gotoSkill();
  };
  CastleMissingSceatSkillExpansionDialog.prototype.gotoSkill = function () {
    if (__dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.LEGEND_TEMPLE)) {
      this.gotoSceatTree();
    } else {
      this.gotoBuildMenu();
    }
  };
  CastleMissingSceatSkillExpansionDialog.prototype.gotoSceatTree = function () {
    var __s23local0 = __dep_export_CastleModel.CastleModel.expansionCostsData.getSceatSkillLocked();
    var __s23local1 = __dep_export_CastleModel.CastleModel.legendSkillData.getTabBySkillId(__s23local0);
    var __s23local2 = new __dep_export_CastleLegendSkillDialogProperties.CastleLegendSkillDialogProperties(__s23local1, __s23local0);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLegendSkillDialog.CastleLegendSkillDialog, __s23local2);
  };
  CastleMissingSceatSkillExpansionDialog.prototype.gotoBuildMenu = function () {
    var __s25local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_Iso.Iso.renderer.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.LEGEND_TEMPLE), "ABasicBuildingVE");
    if (__s25local0) {
      __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__s25local0.vo.pos);
      __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s25local0);
    } else {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var __s25local1 = this.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
      var __s25local2 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.LEGEND_TEMPLE_WOD_LEVEL1);
      if (!__s25local1.centerAndHighlightBuildingInShop(__s25local2)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warningTitle"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warning")));
      }
    }
  };
  CastleMissingSceatSkillExpansionDialog.NAME = "CastleMissingSceatSkillExpansion";
  return CastleMissingSceatSkillExpansionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleMissingSceatSkillExpansionDialog = __s0local0;
