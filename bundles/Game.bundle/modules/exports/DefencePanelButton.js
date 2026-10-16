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
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function DefencePanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DefencePanelButton, __s1param0);
  DefencePanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(DefencePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Defence;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  DefencePanelButton.prototype.isButtonEnabled = function () {
    return (__dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle || !!__dep_export_CastleModel.CastleModel.areaData && !!__dep_export_CastleModel.CastleModel.areaData.activeArea && !!__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.isConqueredByMe) && __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_DEFENCE_DIALOG);
  };
  DefencePanelButton.prototype.getButtonTooltip = function () {
    return "panel_action_defence";
  };
  DefencePanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.userData.userCanOpenDefenceScreen) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleDefenceDialog.CastleDefenceDialog, new __dep_export_CastleDefenceDialogProperties.CastleDefenceDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo, __dep_exact_26a421b704832cff.DefenseConst.TOOL_TYPE_WALL));
    } else {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("panel_action_levelBlockDefencescreen"), 4, null, null, false));
    }
  };
  return DefencePanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.DefencePanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleDefenceDialog = require("gge-module:export_CastleDefenceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
