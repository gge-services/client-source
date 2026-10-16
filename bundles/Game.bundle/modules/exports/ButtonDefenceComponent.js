Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleDefenceDialogProperties = require("gge-module:export_CastleDefenceDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonDefenceComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonDefenceComponent, __s1param0);
  ButtonDefenceComponent.prototype.onClick = function () {
    if (__dep_export_CastleModel.CastleModel.userData.userCanOpenDefenceScreen) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDefenceDialog.CastleDefenceDialog, new __dep_export_CastleDefenceDialogProperties.CastleDefenceDialogProperties(this._worldMapObjectVO, __dep_exact_26a421b704832cff.DefenseConst.TOOL_TYPE_WALL));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("panel_action_levelBlockDefencescreen"), 4, null, null, false));
    }
  };
  ButtonDefenceComponent.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this._button.enableButton = __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_DEFENCE_DIALOG);
  };
  Object.defineProperty(ButtonDefenceComponent.prototype, "targetWMO", {
    set: function (__s11param0) {
      this._worldMapObjectVO = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonDefenceComponent.prototype.initAsActionPanelButton = function () {
    this._button.toolTipText = "panel_action_defence";
  };
  ButtonDefenceComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canChangeDefenceOnWorldmap;
  };
  Object.defineProperty(ButtonDefenceComponent.prototype, "infoTextId", {
    get: function () {
      return "Defence";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonDefenceComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonDefenceComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleDefenceDialog = require("gge-module:export_CastleDefenceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
