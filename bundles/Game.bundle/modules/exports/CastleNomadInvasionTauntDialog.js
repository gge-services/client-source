Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SLaunchTauntAttackVO = require("gge-module:export_C2SLaunchTauntAttackVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleNomadInvasionTauntDialog() {
    var __s3local0 = this;
    __s3local0.khanLevel = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleNomadInvasionTauntDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNomadInvasionTauntDialog, __s1param0);
  CastleNomadInvasionTauntDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_tauntDialog_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_showToAlliance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_tauntDialog_showAttack_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_taunt.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_tauntDialog_taunt_button")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._itxt_rage = this.textFieldManager.registerTextField(this.dialogDisp.txt_rage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_rage.autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_rage.toolTipText = "rage";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_taunt]);
    __dep_export_ButtonHelper.ButtonHelper.initCheckBox(this.dialogDisp.checkbox_showToAlliance);
    this.showToAllianceCheckbox = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.dialogDisp.checkbox_showToAlliance);
  };
  CastleNomadInvasionTauntDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.khanLevel = __dep_exact_f855840627e6e145.int(this.eventVO.khanCampLevel);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_tauntDialog_desc", [this.khanLevel])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_khanLevel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_khanCamp_castleName_0"));
    this._itxt_rage.textContentVO.textReplacements = [this.eventVO.playerRage, this.eventVO.neededPlayerRage];
    this._itxt_rage.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.showToAllianceCheckbox.deselected();
    this.showTargetCastle();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleNomadInvasionTauntDialog.prototype.showTargetCastle = function () {
    this.itxtNameSourceCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_targetCastle.txt_castleName, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxtNameSourceCastle.autoFitToBounds = true;
    this.itxtNameSourceCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var __s9local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
    this.itxtNameSourceCastle.textContentVO.stringValue = __s9local0.areaNameString;
    this.itxtNameSourceCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.info_targetCastle.icon_castle);
    this.dialogDisp.info_targetCastle.icon_castle.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s9local0, CastleNomadInvasionTauntDialog.CASTLE_SIZE, true, false, false, "", null));
  };
  CastleNomadInvasionTauntDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleNomadInvasionTauntDialog.prototype.onEventEnd = function (__s13param0) {
    if (__s13param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
      this.hide();
    }
  };
  CastleNomadInvasionTauntDialog.prototype.onClick = function (__s16param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.dialogDisp.checkbox_showToAlliance:
          this.showToAllianceCheckbox.toggleSelected();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_nomadInvasion_khanContest_tauntDialog"));
          break;
        case this.dialogDisp.btn_taunt:
          this.tauntKhan();
      }
      __s1param0.prototype.onClick.call(this, __s16param0);
    }
  };
  CastleNomadInvasionTauntDialog.prototype.tauntKhan = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLaunchTauntAttackVO.C2SLaunchTauntAttackVO(this.showToAllianceCheckbox.isSelected, this.eventVO.eventId));
    this.hide();
  };
  Object.defineProperty(CastleNomadInvasionTauntDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadInvasionTauntDialog.__initialize_static_members = function () {
    CastleNomadInvasionTauntDialog.NAME = "CastleNomadInvasionTaunt";
    CastleNomadInvasionTauntDialog.CASTLE_SIZE = new __s0local0(70, 70);
  };
  return CastleNomadInvasionTauntDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleNomadInvasionTauntDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
