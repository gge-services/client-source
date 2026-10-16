Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemSeasonLeagueMedalVO(__s3param0 = -1, __s3param1 = 0) {
    var __s3local0 = this;
    __s3local0._id = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this)._id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemSeasonLeagueMedalVO, __s1param0);
  CollectableItemSeasonLeagueMedalVO.prototype.getXmlMedalVO = function () {
    return __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.seasonMedals.get(this.id);
  };
  CollectableItemSeasonLeagueMedalVO.prototype.getTooltipTextId = function () {
    var __s7local0 = this.getXmlMedalVO();
    if (__s7local0) {
      return "seasonLeague_" + __s7local0.type + "_name";
    } else {
      return "";
    }
  };
  CollectableItemSeasonLeagueMedalVO.prototype.getDescriptionTextId = function () {
    var __s11local0 = this.getXmlMedalVO();
    if (__s11local0) {
      return "seasonLeague_" + __s11local0.type + "_short_info";
    } else {
      return "";
    }
  };
  Object.defineProperty(CollectableItemSeasonLeagueMedalVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s17param0) {
      this._id = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemSeasonLeagueMedalVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemSeasonLeagueMedalVO = __s0local0;
