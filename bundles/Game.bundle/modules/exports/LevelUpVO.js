Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function LevelUpVO() {
    this._isLegend = false;
    this._minLevel = 0;
    this._maxLevel = 0;
    this._rewardID = 0;
    this._inSkipGroup = false;
  }
  LevelUpVO.prototype.checkLevelRange = function (__s5param0, __s5param1 = false) {
    return __s5param1 == this._isLegend && this._minLevel <= __s5param0 && __s5param0 <= this._maxLevel;
  };
  LevelUpVO.prototype.parseXML = function (__s7param0) {
    this._isLegend = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isLegend", __s7param0, "0") == "1";
    this._minLevel = parseInt(__s7param0.minLevel || "");
    this._maxLevel = parseInt(__s7param0.maxLevel || "");
    this._rewardID = parseInt(__s7param0.rewardID || "");
    this._inSkipGroup = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("abTest", __s7param0, "") == __dep_exact_26a421b704832cff.SplitRunConst.SKIP_GROUP_PARAM;
    this._inSkipGroup = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("abTest", __s7param0, "") == __dep_exact_26a421b704832cff.SplitRunConst.SKIP_GROUP_PARAM;
  };
  Object.defineProperty(LevelUpVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LevelUpVO.prototype, "inSkipGroup", {
    get: function () {
      return this._inSkipGroup;
    },
    enumerable: true,
    configurable: true
  });
  return LevelUpVO;
}();
exports.LevelUpVO = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
