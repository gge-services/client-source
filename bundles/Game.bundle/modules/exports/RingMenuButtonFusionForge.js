Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecorationForgeSelectResultVO = require("gge-module:export_DecorationForgeSelectResultVO");
var __dep_export_DecorationForgeMainDialogProperties = require("gge-module:export_DecorationForgeMainDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonFusionForge() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonFusionForge, __s1param0);
  RingMenuButtonFusionForge.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_fusionForge;
    this._disp.visible = this.visible;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp, __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_FUSION_FORGE);
  };
  Object.defineProperty(RingMenuButtonFusionForge.prototype, "visible", {
    get: function () {
      return !this.isBuildingInProgress() && !!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "ADecoBuildingVE") && this.targetBuilding.decoBuildingVO.fusionInfoVO.isFusionTarget && !this.targetBuilding.buildingVO.isDamaged && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isCrossplay;
    },
    enumerable: true,
    configurable: true
  });
  RingMenuButtonFusionForge.prototype.onClick = function (__s9param0, __s9param1) {
    var __s9local0 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO();
    __s9local0.buildingVO = this.targetBuilding.buildingVO;
    var __s9local1 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
    var __s9local2 = new __dep_export_DecorationForgeSelectResultVO.DecorationForgeSelectResultVO(__s9local0, __s9local1.areaInfo.kingdomID, __s9local1.areaId);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DecorationForgeMainDialog.DecorationForgeMainDialog, new __dep_export_DecorationForgeMainDialogProperties.DecorationForgeMainDialogProperties(__s9local2));
  };
  RingMenuButtonFusionForge.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp) ? "ringmenu_fusion" : "requiresLevel70_tt");
  };
  return RingMenuButtonFusionForge;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonFusionForge = __s0local0;
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DecorationForgeMainDialog = require("gge-module:export_DecorationForgeMainDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
