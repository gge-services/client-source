Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleShortArmyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleShortArmyDialog.NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleShortArmyDialog, __s1param0);
  CastleShortArmyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._movementDetails = new __dep_export_CastleMovementDetailsComponent.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_shortArmy_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_army, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_shortArmy_title"));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.itxt_armysize = this.textFieldManager.registerTextField(this.dialogDisp.txt_armysize, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_explanation = this.textFieldManager.registerTextField(this.dialogDisp.txt_explanation, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_shortArmy_exactSizeTooFarAway"));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome]);
  };
  CastleShortArmyDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.iArmyMapmovementVO.isAccurateInfo) {
      this.itxt_explanation.visible = false;
      this.itxt_description.textContentVO.textId = "dialog_shortArmy_exactSize";
    } else {
      this.itxt_explanation.visible = true;
      this.itxt_description.textContentVO.textId = "dialog_shortArmy_guessedSize";
    }
    this.dialogDisp.btn_help.visible = this.iArmyMapmovementVO.isAttackingMovement;
    this._movementDetails.initComponent(this.mapMovementVO, this.bindFunction(this.hide));
    this.itxt_armysize.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_CIRCA_NOMINAL, [this.iArmyMapmovementVO.armySize]);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemove));
  };
  CastleShortArmyDialog.prototype.onMovementRemove = function (__s11param0) {
    if (__s11param0.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  CastleShortArmyDialog.prototype.onArmyDataUpdated = function (__s14param0) {
    if (this.mapMovementVO.getTimeUnitMovmentReachTargetInSeconds() <= 1) {
      this.hide();
    } else {
      this._movementDetails.updateComponent();
    }
  };
  CastleShortArmyDialog.prototype.hideLoaded = function (__s18param0 = null) {
    this._movementDetails.destroy();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemove));
    __s1param0.prototype.hideLoaded.call(this, __s18param0);
  };
  CastleShortArmyDialog.prototype.onClick = function (__s20param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      __s1param0.prototype.onClick.call(this, __s20param0);
      switch (__s20param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_armyDialog_returningArmy"));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_armyDialog_enemy"));
          }
      }
    }
  };
  Object.defineProperty(CastleShortArmyDialog.prototype, "iArmyMapmovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShortArmyDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShortArmyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleShortArmyDialog.__initialize_static_members = function () {
    CastleShortArmyDialog.NAME = "CastleShortArmy";
  };
  return CastleShortArmyDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleShortArmyDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementDetailsComponent = require("gge-module:export_CastleMovementDetailsComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
