Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_AFixedPositionBuildingVO = require("gge-module:export_AFixedPositionBuildingVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function HarborFixedPositionBuildingVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset = new __s0local0(35, 10);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HarborFixedPositionBuildingVO, __s1param0);
  HarborFixedPositionBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    if (this.level >= 2) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Harbor, "effect", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.shownTravelBoost]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return HarborFixedPositionBuildingVO;
}(__dep_export_AFixedPositionBuildingVO.AFixedPositionBuildingVO);
exports.HarborFixedPositionBuildingVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IShopVO", "ICostVO", "IInventoryVO", "IRelativeGridBuildingVO");
