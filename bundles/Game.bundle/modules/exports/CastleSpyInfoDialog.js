Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __s0local0 = function (__s1param0) {
  function CastleSpyInfoDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSpyInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyInfoDialog, __s1param0);
  CastleSpyInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._movementDetails = new __dep_export_CastleMovementDetailsComponent.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.dialogDisp.mc_spyCount.toolTipText = "spy_dialog_spyCount";
    this.dialogDisp.mc_spyRisk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_spyInfo_description"));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.ispyCount_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyCount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.ispyRisk_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyRisk.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.ispyEffect_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyEffect.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [0]));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome]);
  };
  CastleSpyInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 147, 128);
    if (this.spyMapmovementVO.spyType == __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_MILITARY) {
      this.itxt_title.textContentVO.textId = "dialog_spy_military";
    } else if (this.spyMapmovementVO.spyType == __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_ECO) {
      this.itxt_title.textContentVO.textId = "dialog_spy_economy";
    } else if (this.spyMapmovementVO.spyType == __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE) {
      this.itxt_title.textContentVO.textId = "dialog_spy_titleSabotage";
    }
    this.itxt_title.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.ispyCount_txt_value.textContentVO.numberValue = this.spyMapmovementVO.spyCount;
    this.ispyRisk_txt_value.textContentVO.textReplacements = [this.spyMapmovementVO.spyRisk];
    if (this.spyMapmovementVO.isSabotageSpyMovement) {
      this.dialogDisp.mc_spyEffect.mc_icon.gotoAndStop(2);
      this.ispyEffect_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
      this.ispyEffect_txt_value.textContentVO.textReplacements = [this.spyMapmovementVO.sabotageDamage];
      this.dialogDisp.mc_spyEffect.toolTipText = "spy_dialog_sabotageDamage";
    } else {
      this.dialogDisp.mc_spyEffect.mc_icon.gotoAndStop(1);
      this.ispyEffect_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
      this.ispyEffect_txt_value.textContentVO.textReplacements = [this.spyMapmovementVO.spyAccuracy];
      this.dialogDisp.mc_spyEffect.toolTipText = "spy_dialog_spyAccuracy";
    }
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(this.spyMapmovementVO, this.bindFunction(this.hide));
  };
  CastleSpyInfoDialog.prototype.onArmyDataUpdated = function (__s14param0) {
    if (this.spyMapmovementVO.getTimeUnitMovmentReachTargetInSeconds() < 2) {
      this.hide();
    } else {
      this._movementDetails.updateComponent();
    }
  };
  CastleSpyInfoDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_spyMove"));
    }
  };
  CastleSpyInfoDialog.prototype.hideLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s21param0);
    this._movementDetails.destroy();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
  };
  CastleSpyInfoDialog.prototype.onArmyRemoved = function (__s23param0) {
    if (__s23param0.mapmovementVO.objectId == this.spyMapmovementVO.objectId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleSpyInfoDialog.prototype, "spyMapmovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyInfoDialog.__initialize_static_members = function () {
    CastleSpyInfoDialog.NAME = "CastleSpyInfoEx";
  };
  return CastleSpyInfoDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSpyInfoDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementDetailsComponent = require("gge-module:export_CastleMovementDetailsComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
