Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemSeasonLeagueMedalVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemSeasonLeagueMedalVE, __s1param0);
  CollectableItemSeasonLeagueMedalVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemSeasonLeagueMedalVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemSeasonLeagueMedalVE.prototype.iconCreate = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int(this.medalVO && this.medalVO.id > 0 ? this.medalVO.id : 0);
    this.dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CollectableItemSeasonLeagueMedalVE.ASSET_CLIP_NAME_PREFIX + __s9local0, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(CollectableItemSeasonLeagueMedalVE.ASSET_FILE_NAME)));
  };
  Object.defineProperty(CollectableItemSeasonLeagueMedalVE.prototype, "medalVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemSeasonLeagueMedalVE.ASSET_CLIP_NAME_PREFIX = "SeasonLeagueMedal_";
  CollectableItemSeasonLeagueMedalVE.ASSET_FILE_NAME = "SeasonLeagueMedals";
  return CollectableItemSeasonLeagueMedalVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemSeasonLeagueMedalVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
