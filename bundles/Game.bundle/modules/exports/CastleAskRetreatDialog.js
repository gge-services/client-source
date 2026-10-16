Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SCancelMovementVO = require("gge-module:export_C2SCancelMovementVO");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAskRetreatDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.CastleStandardYesNo()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAskRetreatDialog, __s1param0);
  CastleAskRetreatDialog.prototype.applyProperties = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapMovementVO, "SupportDefenceMapmovementVO") && this.dialogProperties.mapMovementVO.isStationed) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_moveOverview_sendHome")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ringmenu_retreat")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapMovementVO, "SpyMapmovementVO")) {
      if (this.dialogProperties.mapMovementVO.isSabotageSpyMovement) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_retreatyesno_sabotage"));
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_retreatYesNo_spy_copy"));
      }
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapMovementVO, "SiegeMapmovementVO")) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_retreatYesNo_occupation_copy"));
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapMovementVO, "MarketMapmovementVO")) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_retreatYesNo_market_copy"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_retreatYesNo_copy"));
    }
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
  };
  CastleAskRetreatDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCancelMovementVO.C2SCancelMovementVO(this.dialogProperties.mapMovementVO.objectId));
        if (this.dialogProperties.yesCallBack) {
          this.dialogProperties.yesCallBack();
        }
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
    }
  };
  CastleAskRetreatDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.armyData.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    __s1param0.prototype.hide.call(this);
  };
  CastleAskRetreatDialog.prototype.onArmyRemoved = function (__s21param0) {
    if (__s21param0.mapmovementVO.objectId == this.dialogProperties.mapMovementVO.objectId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleAskRetreatDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAskRetreatDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAskRetreatDialog.__initialize_static_members = function () {
    CastleAskRetreatDialog.NAME = "CastleAskRereatDialog";
  };
  return CastleAskRetreatDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleAskRetreatDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
