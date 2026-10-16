Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function AlliancePanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AlliancePanelButton, __s1param0);
  AlliancePanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(AlliancePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Alliance;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  AlliancePanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_alliance";
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("panel_shop_needQuestProgress", [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ALLIANCE]);
    }
  };
  AlliancePanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ALLIANCE;
  };
  AlliancePanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
    } else {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog);
    }
  };
  return AlliancePanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.AlliancePanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleAllianceTeaserDialog = require("gge-module:export_CastleAllianceTeaserDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
