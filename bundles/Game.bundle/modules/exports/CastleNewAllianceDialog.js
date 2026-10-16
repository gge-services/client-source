Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_C2SFoundAllianceVO = require("gge-module:export_C2SFoundAllianceVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_CastleJSONTextFieldRestrictor = require("gge-module:export_CastleJSONTextFieldRestrictor");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleNewAllianceDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleNewAllianceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNewAllianceDialog, __s1param0);
  CastleNewAllianceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_allianceLanguage], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_openAllianceYes, this.dialogDisp.btn_openAllianceNo], __dep_exact_84d43d9c404bd4d8.TwoStateButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceDescription, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLanguage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_allianceLanguage_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_openAlliance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_openAlliance_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_openAllianceYes, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("commons_yes"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_openAllianceNo, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("commons_no"));
    this.dialogDisp.btn_allianceLanguage.toolTipText = "selectlanguage";
    this.dialogDisp.mc_openAllianceHelp.toolTipText = "dialog_alliance_openAlliance_icon_tooltip";
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleNewAllianceDialog.prototype.showLoaded = function (__s7param0 = null) {
    this._scrollComponent ||= new __dep_export_ModernTextScrollComponent.ModernTextScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addVisualElements([this.dialogDisp.scroll_bg]).addMouseWheelElements([this.dialogDisp]), this.dialogDisp.txt_description);
    if (!this.iinput_allianceName) {
      this.iinput_allianceName = this.textFieldManager.registerTextField(this.dialogDisp.input_allianceName, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("generic_register_insertName")));
      this.iinput_allianceName.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
      this.iinput_allianceName.maxChars = __dep_exact_26a421b704832cff.AllianceConst.NAME_MAX_LENGTH;
      this._inputBehaviourName = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_name, this.iinput_allianceName);
    }
    this._messageTextRestrictor ||= new __dep_export_CastleJSONTextFieldRestrictor.CastleJSONTextFieldRestrictor();
    if (!this.iinput_allianceDescription) {
      this.iinput_allianceDescription = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_descriptionPreset")));
      this._inputBehaviourDesc = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_description, this.iinput_allianceDescription);
      this.iinput_allianceDescription.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    }
    this._messageTextRestrictor.init(this.iinput_allianceDescription, __dep_exact_26a421b704832cff.AllianceConst.DESCRIPTION_MAX_LENGTH);
    this._costListComponent ||= new __dep_export_CastleResourceListComponent.CastleResourceListComponent(this.dialogDisp.allianceCostList, __dep_exact_81dacdf05bd32292.getDefinitionByName("NewAllianceCostItem"), 16);
    this._costListComponent.displayAsCosts = true;
    this.controller.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_FOUNDED, this.bindFunction(this.onAllianceFounded));
    this._scrollComponent.scrollToStart();
    this.unLockDialog();
    this._scrollComponent.onShow();
    this._inputBehaviourName.onShow();
    this._inputBehaviourDesc.onShow();
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive ? 0 : __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.AllianceConst.FOUND_COST_C2));
    var __s7local1 = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__dep_exact_26a421b704832cff.AllianceConst.FOUND_COST_WOOD), new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__dep_exact_26a421b704832cff.AllianceConst.FOUND_COST_STONE), new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff.AllianceConst.FOUND_COST_C1)), new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s7local0));
    this._costListComponent.updateComponent(__s7local1, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_foundCost"));
    this.setAllianceLanguage(__dep_export_CastleAllianceForumData.CastleAllianceForumData.LAST_SEARCHED_LANGUAGE != "" ? __dep_export_CastleAllianceForumData.CastleAllianceForumData.LAST_SEARCHED_LANGUAGE : __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.currentCountryLanguageCode);
    this.openAlliance(true);
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleNewAllianceDialog.prototype.hideLoaded = function (__s11param0 = null) {
    this._costListComponent.destroy();
    this._scrollComponent.onHide();
    this._inputBehaviourName.onHide();
    this._inputBehaviourDesc.onHide();
    this.controller.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_FOUNDED, this.bindFunction(this.onAllianceFounded));
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
  };
  CastleNewAllianceDialog.prototype.onClick = function (__s13param0) {
    if (!this.isLocked) {
      __s1param0.prototype.onClick.call(this, __s13param0);
      switch (__s13param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onCreateNewAlliance();
          break;
        case this.dialogDisp.btn_allianceLanguage:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceLanguageSelectionDialog.AllianceLanguageSelectionDialog, new __dep_export_AllianceLanguageSelectionDialogProperties.AllianceLanguageSelectionDialogProperties(this.selectedAllianceLanguage, this.bindFunction(this.setAllianceLanguage)));
          break;
        case this.dialogDisp.btn_openAllianceYes:
          this.openAlliance(true);
          break;
        case this.dialogDisp.btn_openAllianceNo:
          this.openAlliance(false);
      }
    }
  };
  CastleNewAllianceDialog.prototype.onAllianceFounded = function (__s17param0) {
    this.unLockDialog();
    this.hide();
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
  };
  CastleNewAllianceDialog.prototype.onCreateNewAlliance = function () {
    if (this.iinput_allianceName.text == "" || this.iinput_allianceName.text == this._inputBehaviourName.defaultText) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_noName")));
    } else if (__dep_exact_9e901e8e2483a22f_2.TextValide.isUsernameValide(this.iinput_allianceName.text)) {
      var __s19local0 = __dep_export_CastleAllianceForumData.CastleAllianceForumData.getForumValidText(this.iinput_allianceDescription.text);
      var __s19local1 = __dep_export_ButtonHelper.ButtonHelper.isButtonSelected(this.dialogDisp.btn_openAllianceYes);
      this.lockDialog();
      __dep_exact_9e901e8e2483a22f.BasicController.getInstance().sendCommandVOAndWait(new __dep_export_C2SFoundAllianceVO.C2SFoundAllianceVO(this.iinput_allianceName.text, __s19local0, this.selectedAllianceLanguage, __s19local1));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alliance_name_invalide")));
    }
  };
  CastleNewAllianceDialog.prototype.checkWaitingAnimState = function (__s24param0) {
    if (__s24param0 == __dep_export_ClientConstSF.ClientConstSF.S2C_FOUND_ALLIANCE) {
      this.unLockDialog();
    }
  };
  CastleNewAllianceDialog.prototype.setAllianceLanguage = function (__s27param0) {
    this.selectedAllianceLanguage = __s27param0;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_allianceLanguage.txt_selectedLanguage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("language_native_" + this.selectedAllianceLanguage));
  };
  CastleNewAllianceDialog.prototype.openAlliance = function (__s29param0) {
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_openAllianceYes, __s29param0);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_openAllianceNo, !__s29param0);
  };
  CastleNewAllianceDialog.NAME = "CastleNewAlliance_W";
  return CastleNewAllianceDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleNewAllianceDialog = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_ModernTextScrollComponent = require("gge-module:export_ModernTextScrollComponent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_AllianceLanguageSelectionDialog = require("gge-module:export_AllianceLanguageSelectionDialog");
var __dep_export_AllianceLanguageSelectionDialogProperties = require("gge-module:export_AllianceLanguageSelectionDialogProperties");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
