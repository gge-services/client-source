Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRubyWishingWellData = require("gge-module:export_CastleRubyWishingWellData");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_AFixedPositionBuildingVO = require("gge-module:export_AFixedPositionBuildingVO");
var __s0local0 = function (__s1param0) {
  function RubyWishingWellFixedPositionBuildingVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset.x = 21;
    __s3local0._posOffset.y = -19;
    __s3local0._hitPoints = 100;
    __s3local0._buildingState = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RubyWishingWellFixedPositionBuildingVO, __s1param0);
  RubyWishingWellFixedPositionBuildingVO.prototype.getUpgradeInfoString = function () {
    if (this.level < 1) {
      return this.name.toLowerCase() + "_build_info";
    } else {
      return __s1param0.prototype.getUpgradeInfoString.call(this);
    }
  };
  Object.defineProperty(RubyWishingWellFixedPositionBuildingVO.prototype, "wodDataType", {
    get: function () {
      return __dep_export_CastleWodData.CastleWodData.TYPE_RUBY_WISHING_WELL;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AFixedPositionBuildingVO.AFixedPositionBuildingVO.prototype, "wodDataType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  RubyWishingWellFixedPositionBuildingVO.prototype.parseXmlNode = function (__s13param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s13param0);
    this._costs.removeByItem(this._costs.getItemByType(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY));
  };
  Object.defineProperty(RubyWishingWellFixedPositionBuildingVO.prototype, "builderMultiplier", {
    get: function () {
      return 0;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AFixedPositionBuildingVO.AFixedPositionBuildingVO.prototype, "builderMultiplier").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RubyWishingWellFixedPositionBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.rubyWishingWellData.isReadyToCollect();
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AFixedPositionBuildingVO.AFixedPositionBuildingVO.prototype, "isClickAvailable").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  RubyWishingWellFixedPositionBuildingVO.prototype.createInfoPanelItems = function (__s23param0) {
    if (this.level >= 1) {
      var __s23local0 = __dep_export_CastleModel.CastleModel.rubyWishingWellData.getNode(this.level);
      __s23param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Time, "rubyWishingWell_waitingtime", new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s23local0.waitingTime, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_HOURS_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true)), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
      __s23param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_C2, "rubyWishingWell_totalamount", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s23local0.entryCosts * __dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.MULTIPLIER), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return RubyWishingWellFixedPositionBuildingVO;
}(__dep_export_AFixedPositionBuildingVO.AFixedPositionBuildingVO);
exports.RubyWishingWellFixedPositionBuildingVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO", "IRelativeGridBuildingVO");
