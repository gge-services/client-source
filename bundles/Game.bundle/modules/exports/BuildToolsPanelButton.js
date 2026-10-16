Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function BuildToolsPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BuildToolsPanelButton, __s1param0);
  BuildToolsPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildingCompleted));
  };
  BuildToolsPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildingCompleted));
    __s1param0.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(BuildToolsPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_BuildTools;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  BuildToolsPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle && (__dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.WORKSHOP) || __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.D_WORKSHOP));
  };
  BuildToolsPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID;
  };
  BuildToolsPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_action_buildTools";
    } else {
      return "alert_never_available";
    }
  };
  BuildToolsPanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.militaryData.isBuildingCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP) || __dep_export_CastleModel.CastleModel.militaryData.isBuildingCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP)) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS));
    } else {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_noWorkshop_copy"), 4, null, null, false));
    }
  };
  BuildToolsPanelButton.prototype.onBuildingCompleted = function (__s25param0) {
    var __s25local0 = __s25param0.params[0];
    if (__s25local0.objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.WORKSHOP || __s25local0.objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.D_WORKSHOP) {
      this.update();
    }
  };
  return BuildToolsPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.BuildToolsPanelButton = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
