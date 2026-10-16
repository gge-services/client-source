Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2STreasureMapsVO = require("gge-module:export_C2STreasureMapsVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleHandleSpaceDialog = require("gge-module:export_ACastleHandleSpaceDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleHandleSeasonDialog() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHandleSeasonDialog, __s1param0);
  CastleHandleSeasonDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.sublayers.add(__dep_export_ACastleHandleSpaceDialog.ACastleHandleSpaceDialog.SUBLAYER_SUPPORT, null, new __dep_export_CastleStartSeasonEventDialogSupport.CastleStartSeasonEventDialogSupport(this.dialogDisp.sublayer_support));
  };
  CastleHandleSeasonDialog.prototype.getSublayerProperties = function (__s7param0) {
    if (__s7param0 == __dep_export_ACastleHandleSpaceDialog.ACastleHandleSpaceDialog.SUBLAYER_SUPPORT) {
      return this.dialogProperties_0.seasonEventVO;
    } else {
      return __s1param0.prototype.getSublayerProperties.call(this, __s7param0);
    }
  };
  CastleHandleSeasonDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STreasureMapsVO.C2STreasureMapsVO(this.dialogProperties_0.getSpaceID()));
  };
  CastleHandleSeasonDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  CastleHandleSeasonDialog.prototype.onBackgroundSkinLoaded = function (__s15param0) {
    __s1param0.prototype.onBackgroundSkinLoaded.call(this, __s15param0);
    this.textFieldManager.registerTextField(this.backgroundDisp.mc_banner.txt_award, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("reward"));
    this.updateReward(this.backgroundDisp.mc_banner.mc_rewardHolder);
  };
  CastleHandleSeasonDialog.prototype.updateReward = function (__s17param0) {
    var __s17local0 = this.dialogProperties_0.getFirstSeasonReward();
    __s17param0.x = __s17local0 && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s17local0, "CollectableItemBuildingVO") && __s17local0.buildingVO && __s17local0.buildingVO.type == "Seafight" ? -7 : 0;
    var __s17local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(91, 91));
    __s17local1.tooltip.showEquipmentCountdown = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s17param0).addIconMc(__s17param0), __s17local0, __s17local1);
  };
  CastleHandleSeasonDialog.prototype.onEventUpdated = function (__s19param0) {
    if (__s19param0.specialEventVO.eventId == this.dialogProperties_0.getEventId()) {
      this.showCurrentSublayer();
    }
  };
  Object.defineProperty(CastleHandleSeasonDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHandleSeasonDialog.NAME = "CastleSeason";
  return CastleHandleSeasonDialog;
}(__dep_export_ACastleHandleSpaceDialog.ACastleHandleSpaceDialog);
exports.CastleHandleSeasonDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleStartSeasonEventDialogSupport = require("gge-module:export_CastleStartSeasonEventDialogSupport");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
