Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SAllianceBattleGroundGetAlliancePerformanceVO = require("gge-module:export_C2SAllianceBattleGroundGetAlliancePerformanceVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceBattlegroundAlliancePerformanceVO = require("gge-module:export_AllianceBattlegroundAlliancePerformanceVO");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformanceAlliance");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.SORT_CONQUERED = "SORT_CONQUERED";
    __s3local0.SORT_ATTACK = "SORT_ATTACK";
    __s3local0.SORT_ALLIANCE_INFLUENCE = "SORT_ALLIANCE_INFLUENCE";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector, __s1param0);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype, "scrollListItemClass", {
    get: function () {
      return __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype, "scrollListItemAssetName", {
    get: function () {
      return "ABG_AlliancePerformance_ListItem";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemAssetName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype, "sortTypes", {
    get: function () {
      return [this.SORT_ALLIANCE_INFLUENCE, this.SORT_ATTACK, this.SORT_CONQUERED];
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "sortTypes").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype, "defaultSortType", {
    get: function () {
      return this.SORT_ALLIANCE_INFLUENCE;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "defaultSortType").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.show = function (__s21param0) {
    __s1param0.prototype.show.call(this, __s21param0);
    this.subLayerDisp.icon_attack_ML.toolTipText = this.subLayerDisp.mc_attack.toolTipText = "stats_capitalsLooted";
    this.subLayerDisp.icon_alliance_influence_points_ML.toolTipText = this.subLayerDisp.mc_allPoints.toolTipText = "stats_contributeAllianceInfluence";
    this.subLayerDisp.icon_conquered_ML.toolTipText = this.subLayerDisp.mc_conquered.toolTipText = "stats_cityStatesConquered";
    this.subLayerDisp.mc_rank.toolTipText = "rank";
    this.subLayerDisp.mc_currentPoints.toolTipText = "currentInfluence";
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.sendPerformanceCommand = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetAlliancePerformanceVO.C2SAllianceBattleGroundGetAlliancePerformanceVO(__dep_export_CastleModel.CastleModel.userData.allianceID, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND));
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.updateDialogElements = function () {
    this.subLayerDisp.icon_attack_ML.visible = this.subLayerDisp.mc_attack.visible = this.currentSorting == this.SORT_ATTACK;
    this.subLayerDisp.icon_alliance_influence_points_ML.visible = this.subLayerDisp.mc_allPoints.visible = this.currentSorting == this.SORT_ALLIANCE_INFLUENCE;
    this.subLayerDisp.icon_conquered_ML.visible = this.subLayerDisp.mc_conquered.visible = this.currentSorting == this.SORT_CONQUERED;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.sortPerformances = function () {
    if (this.alliancePerformanceVOs) {
      switch (this.currentSorting) {
        case this.SORT_ALLIANCE_INFLUENCE:
          this.alliancePerformanceVOs.sort(__dep_export_AllianceBattlegroundAlliancePerformanceVO.AllianceBattlegroundAlliancePerformanceVO.sortByInfluenceAlliancePoints);
          break;
        case this.SORT_ATTACK:
          this.alliancePerformanceVOs.sort(__dep_export_AllianceBattlegroundAlliancePerformanceVO.AllianceBattlegroundAlliancePerformanceVO.sortByAttackPoints);
          break;
        case this.SORT_CONQUERED:
          this.alliancePerformanceVOs.sort(__dep_export_AllianceBattlegroundAlliancePerformanceVO.AllianceBattlegroundAlliancePerformanceVO.sortByConquerPoints);
      }
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.getPointsFromVO = function (__s31param0) {
    switch (this.currentSorting) {
      case this.SORT_ALLIANCE_INFLUENCE:
        return __s31param0.influenceAlliancePoints;
      case this.SORT_ATTACK:
        return __s31param0.attackPoints;
      case this.SORT_CONQUERED:
        return __s31param0.conquerPoints;
    }
    return 0;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.onClick = function (__s34param0) {
    __s1param0.prototype.onClick.call(this, __s34param0);
    switch (__s34param0.target) {
      case this.subLayerDisp.btn_alliance:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR);
        break;
      case this.subLayerDisp.btn_player:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR);
    }
  };
  return CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector;
}(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceAlliance.CastleAllianceBattlegroundEventDialogPerformanceAlliance);
exports.CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem");
