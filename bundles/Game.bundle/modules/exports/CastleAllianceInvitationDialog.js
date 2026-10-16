Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceAcceptInviteVO = require("gge-module:export_C2SAllianceAcceptInviteVO");
var __dep_export_C2SGetAllianceInvitationVO = require("gge-module:export_C2SGetAllianceInvitationVO");
var __dep_export_C2SReadMessagesVO = require("gge-module:export_C2SReadMessagesVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceInvitationDialog(__s3param0 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 ?? CastleAllianceInvitationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInvitationDialog, __s1param0);
  CastleAllianceInvitationDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mc_allianceName.actLikeButton = true;
    this.dialogDisp.mc_leaderName.actLikeButton = true;
    this.dialogDisp.mc_allianceName.mouseChildren = false;
    this.dialogDisp.mc_leaderName.mouseChildren = false;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.mc_allianceName);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.mc_leaderName);
    this.setStaticText();
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("")));
    this.itxt_allianceName = this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceName.txt_nameValue, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.itxt_leaderName = this.textFieldManager.registerTextField(this.dialogDisp.mc_leaderName.txt_leaderValue, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.itxt_languageValue = this.textFieldManager.registerTextField(this.dialogDisp.txt_languageValue, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.itxt_memberCount = this.textFieldManager.registerTextField(this.dialogDisp.txt_membersValue, new __dep_exact_92d05af59ee2ff30_3.NumberVO(0));
    this.itxt_allianceLevelAmount = this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLevelValue, new __dep_exact_92d05af59ee2ff30_3.NumberVO(0));
    this.itxtfameAmount = this.textFieldManager.registerTextField(this.dialogDisp.txt_fameValue, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_allianceLevelValue = this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLevelValue, new __dep_exact_92d05af59ee2ff30_3.NumberVO(0));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_description, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.itxt_question = this.textFieldManager.registerTextField(this.dialogDisp.txt_question, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes, this.dialogDisp.btn_help, this.dialogDisp.btn_openAllianceCard], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleAllianceInvitationDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_INVITATION, this.bindFunction(this.onAllianceInvitationDataUpdate));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInvitationVO.C2SGetAllianceInvitationVO(this.dialogProperties.messageVO.messageID));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReadMessagesVO.C2SReadMessagesVO(this.dialogProperties.messageVO.messageID));
    this.itxt_question.textContentVO.textId = "dialog_alliance_invitationQuestion";
    this.itxt_title.textContentVO.textId = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_invitationHeader");
  };
  CastleAllianceInvitationDialog.prototype.setStaticText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliance_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_leader, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliance_leader"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_language, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_allianceLanguage_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_members, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliance_member"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_fame, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("playerMight"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLevel, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliancelevel"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_description")]));
  };
  CastleAllianceInvitationDialog.prototype.onAllianceInvitationDataUpdate = function (__s11param0) {
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_INVITATION, this.bindFunction(this.onAllianceInvitationDataUpdate));
    this.applyAllianceData(__s11param0.allianceInfoVO);
  };
  CastleAllianceInvitationDialog.prototype.applyAllianceData = function (__s13param0) {
    this.allianceVO = __s13param0;
    if (this.allianceVO) {
      this.itxt_allianceName.textContentVO.stringValue = this.allianceVO.allianceName;
      this.itxt_leaderName.textContentVO.stringValue = this.allianceVO.allianceLeader.playerName;
      this.itxt_languageValue.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("language_native_" + this.allianceVO.allianceLanguage);
      this.itxt_memberCount.textContentVO.numberValue = this.allianceVO.memberAmount;
      this.itxt_allianceLevelAmount.textContentVO.numberValue = this.allianceVO.allianceFameLevel;
      this.itxtfameAmount.textContentVO.numberValue = this.allianceVO.mightPoints;
      this.itxt_allianceLevelValue.textContentVO.numberValue = this.allianceVO.allianceFameLevel;
      this.itxt_description.textContentVO.stringValue = this.allianceVO.allianceDescription;
      this._textScrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO(this.dialogDisp.mc_list.mc_descSlider.btn_minus, this.dialogDisp.mc_list.mc_descSlider.btn_plus, null, null, this.dialogDisp.mc_list.mc_descSlider.mc_sliderLine, this.dialogDisp.mc_list.mc_descSlider.btn_slider, [this.dialogDisp.mc_slider], [this.dialogDisp.mc_list.txt_description, this.dialogDisp.mouse_area]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0), true);
      this._textScrollComponent.strategy.visibleValue = __dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? this.itxt_description.height : this.itxt_description.numLines;
      var __s13local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? 20 : 1);
      this._textScrollComponent.init(1, this.itxt_description.maxScrollV, __s13local0, __s13local0);
      this._textScrollComponent.setVisibility(this.itxt_description.maxScrollV > 1);
      this._textScrollComponent.show();
      this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    } else {
      this.hide();
    }
  };
  CastleAllianceInvitationDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        this.onRefuse();
        break;
      case this.dialogDisp.mc_leaderName:
      case this.dialogDisp.btn_openAllianceCard:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.allianceVO.memberList[0].playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.mc_allianceName:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this.allianceVO.allianceId, this.allianceVO.allianceName), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.btn_yes:
        this.hide();
        this.onAccept();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.helperTextId ? this.helperTextId : ""));
    }
  };
  Object.defineProperty(CastleAllianceInvitationDialog.prototype, "helperTextId", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInvitationDialog.prototype.onRefuse = function () {
    __dep_export_CastleModel.CastleModel.messageData.deleteMessageFromClientList(this.dialogProperties.messageVO);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceAcceptInviteVO.C2SAllianceAcceptInviteVO(this.dialogProperties.messageVO.messageID, 0));
  };
  CastleAllianceInvitationDialog.prototype.onAccept = function () {
    __dep_export_CastleModel.CastleModel.messageData.deleteMessageFromClientList(this.dialogProperties.messageVO);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceAcceptInviteVO.C2SAllianceAcceptInviteVO(this.dialogProperties.messageVO.messageID, 1));
  };
  CastleAllianceInvitationDialog.prototype.showLoaded = function (__s26param0 = null) {
    if (this.helperTextId) {
      this.dialogDisp.btn_help.toolTipText = "generic_help";
    } else {
      this.dialogDisp.btn_help.visible = false;
    }
    this.itxt_question.textContentVO.textId = "dialog_alliance_invitationQuestion";
    this.itxt_title.textContentVO.textId = "dialog_alliance_invitationHeader";
    __s1param0.prototype.showLoaded.call(this);
  };
  CastleAllianceInvitationDialog.prototype.onDescriptionScroll = function () {
    this.itxt_description.scrollV = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._textScrollComponent.currentValue, 1, this.itxt_description.maxScrollV);
  };
  CastleAllianceInvitationDialog.prototype.hideLoaded = function (__s32param0 = null) {
    if (this._textScrollComponent) {
      this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
      this._textScrollComponent.hide();
    }
    __s1param0.prototype.hideLoaded.call(this, __s32param0);
  };
  Object.defineProperty(CastleAllianceInvitationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInvitationDialog.__initialize_static_members = function () {
    CastleAllianceInvitationDialog.NAME = "CastleAllianceInvitationEx";
  };
  return CastleAllianceInvitationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAllianceInvitationDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
