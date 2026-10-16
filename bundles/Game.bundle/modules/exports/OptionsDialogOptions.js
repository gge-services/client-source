Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_C2SMovementFilterOptionEvent = require("gge-module:export_C2SMovementFilterOptionEvent");
var __dep_export_C2SClientSideTrackingVO = require("gge-module:export_C2SClientSideTrackingVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_AOptionsDialogContentCreator = require("gge-module:export_AOptionsDialogContentCreator");
var __dep_export_OptionsDialogOptionsItem = require("gge-module:export_OptionsDialogOptionsItem");
var __dep_export_OptionsDialogRubyConfirmationItem = require("gge-module:export_OptionsDialogRubyConfirmationItem");
var __s0local0 = function (__s1param0) {
  function OptionsDialogOptions() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogOptions, __s1param0);
  OptionsDialogOptions.prototype.createItems = function () {
    var __s5local0 = new __dep_export_OptionsDialogOptionsItem.OptionsDialogOptionsItem(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_title"), OptionsDialogOptions.ITEM_PROPERTIES);
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_animationsText"), __dep_export_CastleModel.CastleModel.gfxData.animationActive, this.bindFunction(this.toggleAnimationActive));
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_questnoteText"), __dep_export_CastleModel.CastleModel.settingsData.questReminderActive, this.bindFunction(this.toggleQuestreminderActive));
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_mapMovementArrows"), __dep_export_CastleModel.CastleModel.settingsData.worldmapMovementsVisible, this.bindFunction(this.toggleWorldMapMovementsVisible));
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_AREmapMovementArrows"), __dep_export_CastleModel.CastleModel.settingsData.worldmapAREMovementsVisible, this.bindFunction(this.toggleAREWorldMapMovementsVisible));
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_mapMarketBarrows"), __dep_export_CastleModel.CastleModel.settingsData.mapFilter2Active, this.bindFunction(this.toggleMapMarketBarrows));
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_mapPVPAttacks"), __dep_export_CastleModel.CastleModel.settingsData.mapFilter0Active, this.bindFunction(this.toggleMapPVPAttacks));
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_mapPVPAttacksAlliance"), __dep_export_CastleModel.CastleModel.settingsData.mapFilter1Active, this.bindFunction(this.toggleMapPvPAttacksAlliance));
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_attackAlert"), __dep_export_CastleModel.CastleModel.gfxData.alertFrameVisible, this.bindFunction(this.toggleAlertFrameVisible));
    __s5local0.addOption(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_showVipFlag_v2"), __dep_export_CastleModel.CastleModel.settingsData.showVIPFlagToOthers, this.bindFunction(this.toggleShowVIPFlag));
    var __s5local1 = new __dep_export_OptionsDialogRubyConfirmationItem.OptionsDialogRubyConfirmationItem(OptionsDialogOptions.ITEM_PROPERTIES);
    var __s5local2 = [];
    __s5local2.push(__s5local0);
    __s5local2.push(__s5local1);
    return __s5local2;
  };
  OptionsDialogOptions.prototype.toggleAnimationActive = function (__s7param0) {
    __dep_export_CastleModel.CastleModel.gfxData.animationActive = __s7param0;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SClientSideTrackingVO.C2SClientSideTrackingVO(__dep_export_ClientConstTracking.ClientConstTracking.ANIMATION_TRACKING_KEY, __dep_export_CastleModel.CastleModel.gfxData.animationActive));
  };
  OptionsDialogOptions.prototype.toggleQuestreminderActive = function (__s9param0) {
    __dep_export_CastleModel.CastleModel.settingsData.questReminderActive = __s9param0;
  };
  OptionsDialogOptions.prototype.toggleWorldMapMovementsVisible = function (__s11param0) {
    __dep_export_CastleModel.CastleModel.settingsData.worldmapMovementsVisible = __s11param0;
  };
  OptionsDialogOptions.prototype.toggleAREWorldMapMovementsVisible = function (__s13param0) {
    __dep_export_CastleModel.CastleModel.settingsData.worldmapAREMovementsVisible = __s13param0;
  };
  OptionsDialogOptions.prototype.toggleMapMarketBarrows = function (__s15param0) {
    __dep_export_CastleModel.CastleModel.armyData.resetAndRemove();
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMovementFilterOptionEvent.C2SMovementFilterOptionEvent(__dep_exact_26a421b704832cff.MovementFilterConst.RESOURCE_TRANSPORTS, __s15param0));
  };
  OptionsDialogOptions.prototype.toggleMapPVPAttacks = function (__s17param0) {
    __dep_export_CastleModel.CastleModel.armyData.resetAndRemove();
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMovementFilterOptionEvent.C2SMovementFilterOptionEvent(__dep_exact_26a421b704832cff.MovementFilterConst.PLAYER_PVP_ATTACKS, __s17param0));
  };
  OptionsDialogOptions.prototype.toggleMapPvPAttacksAlliance = function (__s19param0) {
    __dep_export_CastleModel.CastleModel.armyData.resetAndRemove();
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMovementFilterOptionEvent.C2SMovementFilterOptionEvent(__dep_exact_26a421b704832cff.MovementFilterConst.ALLIANCE_PVP_ATTACKS, __s19param0));
  };
  OptionsDialogOptions.prototype.toggleAlertFrameVisible = function (__s21param0) {
    __dep_export_CastleModel.CastleModel.gfxData.alertFrameVisible = __s21param0;
  };
  OptionsDialogOptions.prototype.toggleShowVIPFlag = function (__s23param0) {
    __dep_export_CastleModel.CastleModel.settingsData.showVIPFlagToOthers = __s23param0;
  };
  OptionsDialogOptions.__initialize_static_members = function () {
    OptionsDialogOptions.ITEM_PROPERTIES = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 8, 0, 0));
  };
  return OptionsDialogOptions;
}(__dep_export_AOptionsDialogContentCreator.AOptionsDialogContentCreator);
exports.OptionsDialogOptions = __s0local0;
__s0local0.__initialize_static_members();
