Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleManagementDialogProperties = require("gge-module:export_CastleManagementDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function ManagementPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ManagementPanelButton, __s1param0);
  ManagementPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(ManagementPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Management;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  ManagementPanelButton.prototype.getButtonTooltip = function () {
    if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ECONOMY) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ECONOMY]);
    } else if (this.isButtonEnabled()) {
      return "dialog_alliance_management";
    } else {
      return "dialog_management_title_inactive";
    }
  };
  ManagementPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_IsoHelper.IsoHelper.view.isInIsoScreen && __dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle && !__dep_export_CastleComponent.CastleComponent.layoutManager.isInMyOccupiedCastle && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ECONOMY;
  };
  ManagementPanelButton.prototype.onButtonClicked = function () {
    var __s18local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    if (__s18local0) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleManagementDialog.CastleManagementDialog, new __dep_export_CastleManagementDialogProperties.CastleManagementDialogProperties(__s18local0));
    }
  };
  return ManagementPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.ManagementPanelButton = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleManagementDialog = require("gge-module:export_CastleManagementDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
