Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceInfoDialogABGTowerItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInfoDialogABGTowerItem, __s1param0);
  CastleAllianceInfoDialogABGTowerItem.prototype.fill = function () {
    this.towerInfoComponent = new __dep_export_ABGTowerInfoComponent.ABGTowerInfoComponent(this.itemMc, new __s0local0(65, 90));
    this.towerInfoComponent.updateTowerInfo(this.towerVO);
    this.towerInfoComponent.onShow();
  };
  CastleAllianceInfoDialogABGTowerItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this.towerInfoComponent) {
      this.towerInfoComponent.onHide();
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogABGTowerItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogABGTowerItem.prototype, "towerVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInfoDialogABGTowerItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleAllianceInfoDialogABGTowerItem = __s0local1;
var __dep_export_ABGTowerInfoComponent = require("gge-module:export_ABGTowerInfoComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
