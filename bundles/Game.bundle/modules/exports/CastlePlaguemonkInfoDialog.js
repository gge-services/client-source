Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePlaguemonkInfoDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePlaguemonkInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlaguemonkInfoDialog, __s1param0);
  CastlePlaguemonkInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    this._movementDetails = new __dep_export_CastleMovementDetailsComponent.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_plagueMonkInfo_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_spy_titlePlague")).verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
    this.itxt_spyCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyCount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_spyRisk = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyRisk.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_spyEffect = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyEffect.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE));
    this.dialogDisp.mc_spyCount.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.mc_spyRisk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.mc_char.gotoAndStop(2);
    this.plagueIconSize = new __s0local0(this.dialogDisp.mc_spyCount.mc_icon.width, this.dialogDisp.mc_spyCount.mc_icon.height);
    this.dialogDisp.mc_spyCount.mc_icon.gotoAndStop(2);
    var __s5local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Icon_PlaqueC2R", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Icon_PlaqueC2R"), null, 0, false);
    this.dialogDisp.mc_spyCount.mc_icon.addChild(__s5local0);
    __s5local0.doWhenLoaded(this.bindFunction(this.setIconSizeWhenLoaded));
    this.dialogDisp.mc_movementInfo.btn_retreat.visible = false;
    this.dialogDisp.btn_help.visible = false;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastlePlaguemonkInfoDialog.prototype.setIconSizeWhenLoaded = function () {
    var __s7local0 = this.dialogDisp.mc_spyCount.mc_icon.getChildAt(0);
    __s7local0.width = this.plagueIconSize.x;
    __s7local0.height = this.plagueIconSize.y;
    __s7local0.doCache();
  };
  CastlePlaguemonkInfoDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_PLAGUE_MONK, this.dialogDisp.mc_char, 300, 160);
    this.itxt_spyCount.textContentVO.numberValue = this.spyMapmovementVO.plagueMonkCount;
    this.itxt_spyRisk.textContentVO.textReplacements = [this.spyMapmovementVO.plagueMonkRisk];
    this.dialogDisp.mc_spyEffect.mc_icon.gotoAndStop(2);
    this.itxt_spyEffect.textContentVO.textReplacements = [this.spyMapmovementVO.plagueDamage];
    this.dialogDisp.mc_spyEffect.toolTipText = "spy_dialog_sabotageDamage";
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(this.spyMapmovementVO, this.bindFunction(this.hide));
  };
  CastlePlaguemonkInfoDialog.prototype.onArmyRemoved = function (__s11param0) {
    if (__s11param0.mapmovementVO.objectId == this.spyMapmovementVO.objectId) {
      this.hide();
    }
  };
  CastlePlaguemonkInfoDialog.prototype.onArmyDataUpdated = function (__s14param0) {
    if (this.spyMapmovementVO.getTimeUnitMovmentReachTargetInSeconds() < 2) {
      this.hide();
    } else {
      this._movementDetails.updateComponent();
    }
  };
  CastlePlaguemonkInfoDialog.prototype.onClick = function (__s18param0) {
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
  CastlePlaguemonkInfoDialog.prototype.hideLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s21param0);
    this._movementDetails.destroy();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
  };
  Object.defineProperty(CastlePlaguemonkInfoDialog.prototype, "spyMapmovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlaguemonkInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlaguemonkInfoDialog.__initialize_static_members = function () {
    CastlePlaguemonkInfoDialog.NAME = "CastleSpyInfoEx";
  };
  return CastlePlaguemonkInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePlaguemonkInfoDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementDetailsComponent = require("gge-module:export_CastleMovementDetailsComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
