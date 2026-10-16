Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceBattleGroundGetAlliancePerformanceVO = require("gge-module:export_C2SAllianceBattleGroundGetAlliancePerformanceVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceBattlegroundAlliancePerformanceVO = require("gge-module:export_AllianceBattlegroundAlliancePerformanceVO");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformanceAlliance");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogPerformanceAllianceTower(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.SORT_TROOPS_SENT_TOWERS = "SORT_TROOPS_SENT_TOWERS";
    __s3local0.SORT_TOWERS_DEFEATED = "SORT_TOWERS_DEFEATED";
    __s3local0.SORT_ALLIANCE_POINTS = "SORT_ALLIANCE_POINTS";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower, __s1param0);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype, "scrollListItemClass", {
    get: function () {
      return __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype, "scrollListItemAssetName", {
    get: function () {
      return "ABG_TowerAlliancePerformance_ListItem";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemAssetName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype, "sortTypes", {
    get: function () {
      return [this.SORT_ALLIANCE_POINTS, this.SORT_TOWERS_DEFEATED, this.SORT_TROOPS_SENT_TOWERS];
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "sortTypes").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype, "defaultSortType", {
    get: function () {
      return this.SORT_ALLIANCE_POINTS;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "defaultSortType").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.show = function (__s21param0) {
    __s1param0.prototype.show.call(this, __s21param0);
    this.subLayerDisp.icon_points_big.toolTipText = this.subLayerDisp.icon_points.toolTipText = "stats_contributeAllianceStatuette";
    this.subLayerDisp.icon_tower_big.toolTipText = this.subLayerDisp.icon_tower.toolTipText = "stats_attackAmountEnemyAllianceTower";
    this.subLayerDisp.icon_troops_big.toolTipText = this.subLayerDisp.icon_troops.toolTipText = "stats_contributeTroopsAllianceTower";
    this.subLayerDisp.mc_rank.toolTipText = "rank";
    this.subLayerDisp.btn_tower.actLikeButton = true;
    this.subLayerDisp.btn_tower.gotoAndStop(2);
    this.subLayerDisp.btn_tower.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.sendPerformanceCommand = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetAlliancePerformanceVO.C2SAllianceBattleGroundGetAlliancePerformanceVO(__dep_export_CastleModel.CastleModel.userData.allianceID, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND));
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.updateDialogElements = function () {
    this.subLayerDisp.icon_points_big.visible = this.subLayerDisp.icon_points.visible = this.currentSorting == this.SORT_ALLIANCE_POINTS;
    this.subLayerDisp.icon_tower_big.visible = this.subLayerDisp.icon_tower.visible = this.currentSorting == this.SORT_TOWERS_DEFEATED;
    this.subLayerDisp.icon_troops_big.visible = this.subLayerDisp.icon_troops.visible = this.currentSorting == this.SORT_TROOPS_SENT_TOWERS;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.sortPerformances = function () {
    switch (this.currentSorting) {
      case this.SORT_ALLIANCE_POINTS:
        this.alliancePerformanceVOs.sort(__dep_export_AllianceBattlegroundAlliancePerformanceVO.AllianceBattlegroundAlliancePerformanceVO.sortByAllianceTowerPoints);
        break;
      case this.SORT_TOWERS_DEFEATED:
        this.alliancePerformanceVOs.sort(__dep_export_AllianceBattlegroundAlliancePerformanceVO.AllianceBattlegroundAlliancePerformanceVO.sortByTowersDefeated);
        break;
      case this.SORT_TROOPS_SENT_TOWERS:
        this.alliancePerformanceVOs.sort(__dep_export_AllianceBattlegroundAlliancePerformanceVO.AllianceBattlegroundAlliancePerformanceVO.sortByTowerTroopsSend);
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.getPointsFromVO = function (__s30param0) {
    switch (this.currentSorting) {
      case this.SORT_ALLIANCE_POINTS:
        return __s30param0.tower_collectedFromTowers;
      case this.SORT_TOWERS_DEFEATED:
        return __s30param0.tower_towersAttack;
      case this.SORT_TROOPS_SENT_TOWERS:
        return __s30param0.tower_troopsSend;
    }
    return 0;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.onClick = function (__s33param0) {
    __s1param0.prototype.onClick.call(this, __s33param0);
    switch (__s33param0.target) {
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
  return CastleAllianceBattlegroundEventDialogPerformanceAllianceTower;
}(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance);
exports.CastleAllianceBattlegroundEventDialogPerformanceAllianceTower = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem");
