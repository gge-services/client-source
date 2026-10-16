Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_C2SAllianceHelpRequestVO = require("gge-module:export_C2SAllianceHelpRequestVO");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceHelpRequestRepairParamsVO = require("gge-module:export_AllianceHelpRequestRepairParamsVO");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonRepairHelpRequest() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonRepairHelpRequest, __s1param0);
  RingMenuButtonRepairHelpRequest.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_repairHelpRequest;
    this._disp.visible = __s5param2.buildingVO.isDamaged;
    this.updateAllianceHelpRepairButton();
    switch (__s5param2.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        this._disp.visible = false;
    }
  };
  RingMenuButtonRepairHelpRequest.prototype.onClick = function (__s8param0, __s8param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceHelpRequestVO.C2SAllianceHelpRequestVO(this.targetBuilding.vo.objectId, __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR));
  };
  RingMenuButtonRepairHelpRequest.prototype.getInfoText = function () {
    this.updateAllianceHelpRepairButton();
    return __dep_exact_92d05af59ee2ff30.Localize.text("ringmenu_allianceHelp");
  };
  RingMenuButtonRepairHelpRequest.prototype.updateAllianceHelpRepairButton = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      var __s12local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceHelpRequestData.getRemainingRepairHelpCooldown());
      var __s12local1 = new __dep_export_AllianceHelpRequestRepairParamsVO.AllianceHelpRequestRepairParamsVO(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, this.targetBuilding.vo.objectId);
      var __s12local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceHelpRequestData.getStatusOfOwnRequestByID(__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR, __s12local1));
      var __s12local3 = __dep_export_CastleModel.CastleModel.allianceHelpRequestData.getOwnRequestVOByParams(__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR, __s12local1);
      switch (__s12local2) {
        case __dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_POSSIBLE:
          if (__s12local0 > -1) {
            this._disp.toolTipText = {
              t: "ringmenu_allianceHelp_repairCooldown_tooltip",
              p: [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s12local0)]
            };
            this._disp.enableButton = false;
          } else {
            this.defaultBehavior();
          }
          break;
        case __dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_PROCESSING:
          this._disp.toolTipText = __s12local3.progress > 0 ? {
            t: "ringmenu_allianceHelp_helpRequestIncoming_tooltip",
            p: [__s12local3.progress, __s12local3.neededProgress]
          } : "ringmenu_allianceHelp_sentHelpRequest_tooltip";
          this._disp.enableButton = false;
          break;
        default:
          this.defaultBehavior();
      }
    } else {
      this._disp.enableButton = false;
      this._disp.toolTipText = "ringmenu_allianceHelp_noAlliance_tooltip";
    }
  };
  RingMenuButtonRepairHelpRequest.prototype.defaultBehavior = function () {
    var __s19local0 = new __dep_export_AllianceHelpRequestRepairParamsVO.AllianceHelpRequestRepairParamsVO(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, this.targetBuilding.vo.objectId);
    var __s19local1 = __dep_export_CastleModel.CastleModel.allianceHelpRequestData.getOwnRequestVOByParams(__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR, __s19local0);
    if (__s19local1) {
      this._disp.toolTipText = __s19local1.progress > 0 ? {
        t: "ringmenu_allianceHelp_helpRequestIncoming_tooltip",
        p: [__s19local1.progress, __s19local1.neededProgress]
      } : "ringmenu_allianceHelp_sentHelpRequest_tooltip";
      this._disp.enableButton = false;
    } else {
      this._disp.toolTipText = "";
      this._disp.enableButton = true;
    }
  };
  return RingMenuButtonRepairHelpRequest;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonRepairHelpRequest = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
