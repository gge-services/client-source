Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SAllianceHelpRequestVO = require("gge-module:export_C2SAllianceHelpRequestVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceHelpRequestConstructionParamsVO = require("gge-module:export_AllianceHelpRequestConstructionParamsVO");
var __dep_export_CastleStartAllianceDialogProperties = require("gge-module:export_CastleStartAllianceDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonConstructionHelpRequest() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonConstructionHelpRequest, __s1param0);
  RingMenuButtonConstructionHelpRequest.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_constructionHelpRequest;
    this._checkMarkDisp = __s5param1.mc_checkmark;
    this.updateButton();
  };
  RingMenuButtonConstructionHelpRequest.prototype.updateButton = function (__s7param0 = null) {
    this._checkMarkDisp.mouseEnabled = false;
    this._checkMarkDisp.visible = false;
    this._disp.visible = false;
    if (__dep_export_CastleModel.CastleModel.allianceHelpRequestData.isBuildHelpAvailable()) {
      switch (this.targetBuilding.buildingVO.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
          var __s7local0 = new __dep_export_AllianceHelpRequestConstructionParamsVO.AllianceHelpRequestConstructionParamsVO(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, this.targetBuilding.vo.objectId);
          var __s7local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceHelpRequestData.getStatusOfOwnRequestByID(__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD, __s7local0));
          var __s7local2 = __dep_export_CastleModel.CastleModel.allianceHelpRequestData.getOwnRequestVOByParams(__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD, __s7local0);
          this._disp.visible = true;
          this._disp.enableButton = __s7local1 == __dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_POSSIBLE;
          if (__s7local2) {
            if (__s7local2.progress == 0) {
              this._disp.toolTipText = "ringmenu_allianceHelp_sentHelpRequest_tooltip";
            } else if (__s7local2.progress < __s7local2.neededProgress) {
              this._disp.toolTipText = {
                t: "ringmenu_allianceHelp_helpRequestIncoming_tooltip",
                p: [__s7local2.progress, __s7local2.neededProgress]
              };
            } else {
              this._disp.toolTipText = "ringmenu_allianceHelp_helpRequestCompleted_tooltip";
              this._checkMarkDisp.visible = true;
            }
          } else {
            this._disp.toolTipText = "";
          }
          break;
        default:
          this._disp.toolTipText = "";
      }
      if (__dep_export_CastleModel.CastleModel.allianceHelpRequestData.hasBuildHelpAbTestLevelRestriction()) {
        this._disp.enableButton = false;
        this._disp.toolTipText = {
          t: __dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED,
          p: [__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD_MINLEVEL]
        };
      }
    }
  };
  RingMenuButtonConstructionHelpRequest.prototype.addEventListeners = function () {
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.updateButton));
    if (__dep_export_CastleModel.CastleModel.allianceHelpRequestData.hasBuildHelpAbTestLevelRestriction()) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.updateButton));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.updateButton));
    }
  };
  RingMenuButtonConstructionHelpRequest.prototype.removeEventListeners = function () {
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.updateButton));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.updateButton));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.updateButton));
  };
  RingMenuButtonConstructionHelpRequest.prototype.onClick = function (__s22param0, __s22param1) {
    if (__dep_export_CastleModel.CastleModel.allianceHelpRequestData.isBuildHelpAvailable() && !__dep_export_CastleModel.CastleModel.allianceHelpRequestData.hasBuildHelpAbTestLevelRestriction()) {
      if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceHelpRequestVO.C2SAllianceHelpRequestVO(this.targetBuilding.vo.objectId, __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD));
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog, new __dep_export_CastleStartAllianceDialogProperties.CastleStartAllianceDialogProperties(function () {}, true));
      }
    }
  };
  RingMenuButtonConstructionHelpRequest.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("ringmenu_allianceHelp_construction");
  };
  return RingMenuButtonConstructionHelpRequest;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonConstructionHelpRequest = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceTeaserDialog = require("gge-module:export_CastleAllianceTeaserDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
