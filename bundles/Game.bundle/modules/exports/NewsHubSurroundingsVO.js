Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_ASurroundingBuildingVO = require("gge-module:export_ASurroundingBuildingVO");
var __s0local0 = function (__s1param0) {
  function NewsHubSurroundingsVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "NewsHub";
    __s3local0._width = 7;
    __s3local0._height = 6;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset.x = 11;
    __s3local0._posOffset.y = -10;
    __s3local0._minLevel = __dep_exact_26a421b704832cff.TutorialConst.TUTORIAL_END_LEVEL;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NewsHubSurroundingsVO, __s1param0);
  NewsHubSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_newshub_subtitle");
  };
  NewsHubSurroundingsVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_newshub_title");
  };
  Object.defineProperty(NewsHubSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return NewsHubSurroundingsVO;
}(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO);
exports.NewsHubSurroundingsVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
