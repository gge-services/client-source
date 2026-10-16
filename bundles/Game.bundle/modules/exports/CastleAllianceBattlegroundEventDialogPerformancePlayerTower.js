Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetPlayerPerformanceVO = require("gge-module:export_C2SGetPlayerPerformanceVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogPerformancePlayerTower(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.performanceVO = new __dep_export_PlayerPerformanceVO.PlayerPerformanceVO();
    __s3local0.mainDialog = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogPerformancePlayerTower, __s1param0);
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.subLayerDisp.mc_item0.toolTipText = "stats_contributeAllianceStatuette";
    this.subLayerDisp.mc_item1.toolTipText = "stats_attackAmountEnemyAllianceTower";
    this.subLayerDisp.mc_item2.toolTipText = "stats_defenseAmountAllianceTower";
    this.subLayerDisp.mc_item3.toolTipText = "stats_defenseAmountAllianceCastle";
    this.subLayerDisp.mc_item4.toolTipText = "stats_buffActivationAllianceCastle";
    this.subLayerDisp.mc_item5.toolTipText = "stats_buffIncreaseAllianceCastle";
    this.subLayerDisp.mc_level.toolTipText = "level";
    this.subLayerDisp.mc_might.toolTipText = "playerMight";
    this.subLayerDisp.btn_alliance.actLikeButton = true;
    this.subLayerDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.gotoAndStop(2);
    this.subLayerDisp.btn_player.gotoAndStop(1);
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    this.subLayerDisp.btn_tower.actLikeButton = true;
    this.subLayerDisp.btn_tower.gotoAndStop(2);
    this.subLayerDisp.btn_tower.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_contributeAllianceStatuette"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_attackAmountEnemyAllianceTower"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_defenseAmountAllianceTower"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_defenseAmountAllianceCastle"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_buffIncreaseAllianceCastle"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stats_buffActivationAllianceCastle"));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetPlayerPerformanceVO.C2SGetPlayerPerformanceVO(__dep_export_CastleModel.CastleModel.userData.playerID, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, this.bindFunction(this.onInformationArrived));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.onInformationArrived = function (__s9param0) {
    this.performanceVO = __s9param0.params[0];
    this.updateDialog();
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.updateDialog = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleModel.CastleModel.userData.userName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleModel.CastleModel.userData.allianceName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_level, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.userData.level));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_might, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.mightData.userCurrentMight));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_playercrest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item0.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.CONTRIBUTION_TO_ALLIANCE_TOWER_POINTS)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item1.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.ALLIANCE_TOWERS_DEFEATED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item2.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.ALLIANCE_TOWERS_DEFENDED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item3.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.ALLIANCE_CASTLES_DEFENDED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item4.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.TOWER_EFFECT_BUFFS_PURCHASED)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_item5.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getPerformanceData(__dep_exact_26a421b704832cff_1.StatisticsConst.TOWER_EFFECT_BUFFS_ACTIVATED)));
  };
  CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.subLayerDisp.btn_alliance:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER);
        break;
      case this.subLayerDisp.btn_player:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER);
        break;
      case this.subLayerDisp.btn_tower:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER);
    }
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformancePlayerTower.prototype, "vo", {
    get: function () {
      return this.performanceVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogPerformancePlayerTower;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogPerformancePlayerTower = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_PlayerPerformanceVO = require("gge-module:export_PlayerPerformanceVO");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
