Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialogPerformancePlayer(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.performanceVO = new __dep_export_PlayerPerformanceVO.PlayerPerformanceVO();
    __s3local0.mainDialog = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialogPerformancePlayer, __s1param0);
  CastleStormIslandsMainDialogPerformancePlayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.subLayerDisp.mc_icon0.toolTipText = "stats_island_aquamarineCollected";
    this.subLayerDisp.mc_icon1.toolTipText = "stats_island_aquamarineIn_island_village";
    this.subLayerDisp.mc_icon2.toolTipText = "stats_island_aquamarineIn_dungeon_castleName_4";
    this.subLayerDisp.mc_icon3.toolTipText = "stats_island_aquamarineIn_PvP";
    this.subLayerDisp.mc_icon4.toolTipText = "stats_island_aquamarineOut_cargoShip";
    this.subLayerDisp.mc_icon5.toolTipText = "stats_island_aquamarineOut_versusPlayer";
    this.subLayerDisp.icon_level.toolTipText = "level";
    this.subLayerDisp.icon_aquaPoints.toolTipText = "aquamarin_points_alliance_tooltip";
    this.subLayerDisp.btn_performanceAlliance.actLikeButton = true;
    this.subLayerDisp.btn_performancePlayer.actLikeButton = true;
    this.subLayerDisp.btn_titles.actLikeButton = true;
    this.subLayerDisp.btn_performanceAlliance.gotoAndStop(1);
    this.subLayerDisp.btn_performancePlayer.gotoAndStop(2);
    this.subLayerDisp.btn_titles.gotoAndStop(1);
    this.subLayerDisp.btn_performanceAlliance.mouseChildren = false;
    this.subLayerDisp.btn_performancePlayer.mouseChildren = false;
    this.subLayerDisp.btn_titles.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performanceAlliance.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performancePlayer.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myPerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_titles.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_stormTitles_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_island_aquamarineCollected"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_island_aquamarineIn_island_village"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_island_aquamarineIn_dungeon_castleName_4"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_island_aquamarineIn_PvP"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_island_aquamarineOut_cargoShip"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_island_aquamarineOut_versusPlayer"));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetPlayerPerformanceVO.C2SGetPlayerPerformanceVO(__dep_export_CastleModel.CastleModel.userData.playerID, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ISLAND_KINGDOM));
    this.updateDialog();
  };
  CastleStormIslandsMainDialogPerformancePlayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
  };
  CastleStormIslandsMainDialogPerformancePlayer.prototype.onInformationArrived = function (__s9param0) {
    this.performanceVO = __s9param0.params[0];
    this.updateDialog();
  };
  CastleStormIslandsMainDialogPerformancePlayer.prototype.updateDialog = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleModel.CastleModel.userData.userName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleModel.CastleModel.userData.allianceName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_level, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.userData.level));
    if (this.vo.points > -1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_aquaPoints, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.points));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_aquaPoints, new __dep_exact_92d05af59ee2ff30.TextVO("-"));
    }
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_playercrest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    if (this.vo) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.AQUAMARINE_TOTAL)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.AQUAMARINE_RESOURCE_ISLE)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.AQUAMARINE_STORM_FORTRESS)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.AQUAMARINE_PVP)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.AQUAMARINE_SPENT)));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.AQUAMARINE_LOST_PVP)));
    }
  };
  CastleStormIslandsMainDialogPerformancePlayer.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.subLayerDisp.btn_performanceAlliance:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE);
        break;
      case this.subLayerDisp.btn_performancePlayer:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER);
        break;
      case this.subLayerDisp.btn_titles:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_TITLES);
    }
  };
  Object.defineProperty(CastleStormIslandsMainDialogPerformancePlayer.prototype, "vo", {
    get: function () {
      return this.performanceVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleStormIslandsMainDialogPerformancePlayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogPerformancePlayer = __s0local0;
var __dep_export_CastleStormIslandsMainDialog = require("gge-module:export_CastleStormIslandsMainDialog");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SGetPlayerPerformanceVO = require("gge-module:export_C2SGetPlayerPerformanceVO");
var __dep_export_PlayerPerformanceVO = require("gge-module:export_PlayerPerformanceVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
