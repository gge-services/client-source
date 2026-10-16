Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __s0local0 = function (__s1param0) {
  function ATowerVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Basic";
    __s3local0._group = __dep_export_ClientConstCastle.ClientConstCastle.GROUP_TOWER;
    __s3local0._width = 2;
    __s3local0._height = 2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ATowerVO, __s1param0);
  ATowerVO.prototype.canUpgrade = function () {
    return __s1param0.prototype.canUpgrade.call(this) && this.level < this.isoData.objects.defences.currentWallLevel;
  };
  ATowerVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_name";
  };
  ATowerVO.prototype.getShortInfoString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_short_info";
  };
  ATowerVO.prototype.getUpgradeInfoString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_upgrade_info";
  };
  return ATowerVO;
}(require("gge-module:export_ADefenceBuildingVO").ADefenceBuildingVO);
exports.ATowerVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
