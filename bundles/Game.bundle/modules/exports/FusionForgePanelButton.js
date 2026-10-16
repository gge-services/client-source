Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FusionForgeEvent = require("gge-module:export_FusionForgeEvent");
var __dep_export_FusionForgeHubDialogProperties = require("gge-module:export_FusionForgeHubDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function FusionForgePanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgePanelButton, __s1param0);
  FusionForgePanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onEnergyUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyUpdated));
    this.listenOnXPChanged();
  };
  FusionForgePanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onEnergyUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  FusionForgePanelButton.prototype.updateOnVisible = function () {
    this.setHighlight(__dep_export_APanelButton.APanelButton.HIGHLIGHT_TYPE_YELLOW, __dep_export_CastleModel.CastleModel.fusionForgeData.hasAnyForgeFullEnergy() && this.isButtonEnabled());
  };
  Object.defineProperty(FusionForgePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_fusionForge;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  FusionForgePanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_FUSION_FORGE && !__dep_export_ABGHelper.ABGHelper.isOnABGServer && !FusionForgePanelButton.castleEnv.isCrossplay;
  };
  FusionForgePanelButton.prototype.getButtonTooltip = function () {
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer || FusionForgePanelButton.castleEnv.isCrossplay) {
      return "dialog_accountInfo_notAvailable_tooltip";
    } else if (this.isButtonEnabled()) {
      return "fusion";
    } else {
      return "requiresLevel70_tt";
    }
  };
  FusionForgePanelButton.prototype.onEnergyUpdated = function (__s22param0) {
    this.update();
  };
  FusionForgePanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_FusionForgeHubDialog.FusionForgeHubDialog, new __dep_export_FusionForgeHubDialogProperties.FusionForgeHubDialogProperties());
  };
  return FusionForgePanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.FusionForgePanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_FusionForgeHubDialog = require("gge-module:export_FusionForgeHubDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
