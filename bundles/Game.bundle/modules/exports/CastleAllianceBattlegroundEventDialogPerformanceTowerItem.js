Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogPerformanceTowerItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogPerformanceTowerItem, __s1param0);
  CastleAllianceBattlegroundEventDialogPerformanceTowerItem.prototype.fill = function () {
    this.fillItem(this.data.vo1, this.itemMc.item0);
    this.fillItem(this.data.vo2, this.itemMc.item1);
  };
  CastleAllianceBattlegroundEventDialogPerformanceTowerItem.prototype.fillItem = function (__s7param0, __s7param1) {
    if (__s7param0) {
      __s7param1.visible = true;
      this.towerInfo = new __dep_export_ABGTowerInfoComponent.ABGTowerInfoComponent(__s7param1, new __s0local0(100, 160));
      this.towerInfo.updateTowerInfo(__s7param0);
      this.towerInfo.onShow();
      var __s7local0 = false;
      for (var __s7local1 = 0, __s7local2 = __s7param0.connections; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined && __s7local3.playerName == __dep_export_CastleModel.CastleModel.userData.userName) {
          __s7local0 = true;
        }
      }
      __s7param1.mc_myTower.visible = __s7local0;
    } else {
      __s7param1.visible = false;
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceTowerItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this.towerInfo) {
      this.towerInfo.onHide();
    }
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceTowerItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogPerformanceTowerItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleAllianceBattlegroundEventDialogPerformanceTowerItem = __s0local1;
var __dep_export_ABGTowerInfoComponent = require("gge-module:export_ABGTowerInfoComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
