Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function RecruitPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RecruitPanelButton, __s1param0);
  RecruitPanelButton.prototype.updateOnVisible = function () {
    this.iconMc.gotoAndStop(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID ? 2 : 1);
  };
  Object.defineProperty(RecruitPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Recruit;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  RecruitPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
        return "hire";
      } else {
        return "panel_action_recruit";
      }
    } else {
      return "alert_never_available";
    }
  };
  RecruitPanelButton.prototype.isButtonEnabled = function () {
    return !!__dep_export_Iso.Iso.data && __dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle && !__dep_export_CastleComponent.CastleComponent.layoutManager.isInMyOccupiedCastle && (__dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.BARRACKS) || __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_BARRACKS));
  };
  RecruitPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
  };
  RecruitPanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp ? __dep_export_CastleModel.CastleModel.militaryData.isBuildingCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_FACTION_BARRACKS) : __dep_export_CastleModel.CastleModel.militaryData.isBuildingCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS)) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp ? __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    } else {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_noBaracks_copy"), 4, null, null, false));
    }
  };
  return RecruitPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.RecruitPanelButton = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
